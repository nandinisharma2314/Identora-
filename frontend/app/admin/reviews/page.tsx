"use client";

import { useState, useEffect } from "react";
import { Check, X, Shield, ChevronDown } from "lucide-react";

export default function AdminReviews() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/reviews", {
        headers: { Authorization: `Bearer ${password}` },
      });
      if (!res.ok) throw new Error("Invalid password");
      const data = await res.json();
      setReviews(data);
      setIsAuthenticated(true);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: number, newStatus: string) => {
    try {
      const res = await fetch("/api/admin/reviews", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${password}`,
        },
        body: JSON.stringify({ id, status: newStatus }),
      });
      if (res.ok) {
        setReviews(reviews.map((r) => (r.id === id ? { ...r, status: newStatus } : r)));
      }
    } catch (err) {
      console.error(err);
      alert("Failed to update status");
    }
  };



  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <form onSubmit={handleLogin} className="bg-white p-8 rounded-2xl shadow-sm border max-w-sm w-full text-center">
          <div className="mx-auto w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center mb-4">
            <Shield className="text-pink-500 w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Admin Login</h2>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter admin password"
            className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-pink-500 outline-none mb-4"
          />
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            disabled={loading || !password}
            className="w-full bg-pink-500 text-white font-semibold py-3 rounded-xl hover:bg-pink-600 disabled:opacity-50"
          >
            {loading ? "Authenticating..." : "Login"}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Manage Reviews</h1>
            <p className="text-gray-500 mt-1">Approve, hide, or delete client testimonials</p>
          </div>
          <button
            onClick={() => {
              setIsAuthenticated(false);
              setPassword("");
            }}
            className="px-4 py-2 border rounded-lg hover:bg-gray-100 text-sm font-medium"
          >
            Logout
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-600">Client Info</th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-600">Review</th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-600">Date</th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-600">Status</th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-600 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {reviews.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                      No reviews found.
                    </td>
                  </tr>
                ) : (
                  reviews.map((review) => (
                    <tr key={review.id} className="hover:bg-gray-50/50">
                      <td className="px-6 py-4">
                        <div className="font-medium text-gray-900">{review.name}</div>
                        <div className="text-sm text-gray-500">{review.company}</div>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-gray-600 line-clamp-2 max-w-xs">{review.text}</p>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(review.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                            review.status === "approved"
                              ? "bg-green-50 text-green-700 border border-green-200"
                              : review.status === "rejected"
                              ? "bg-red-50 text-red-700 border border-red-200"
                              : "bg-yellow-50 text-yellow-700 border border-yellow-200"
                          }`}
                        >
                          {review.status ? review.status.charAt(0).toUpperCase() + review.status.slice(1) : "Pending"}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <div className="flex items-center justify-end gap-3">
                          <div className="relative">
                            <select
                              value=""
                              onChange={(e) => {
                                if (e.target.value) {
                                  updateStatus(review.id, e.target.value);
                                }
                              }}
                              className="appearance-none outline-none cursor-pointer bg-white border border-gray-200 text-gray-700 text-xs font-medium rounded-lg pl-3 pr-8 py-1.5 hover:bg-gray-50 transition-colors"
                            >
                              <option value="" disabled hidden>None</option>
                              <option value="pending">Pending</option>
                              <option value="approved">Approved</option>
                              <option value="rejected">Rejected</option>
                            </select>
                            <ChevronDown className="w-4 h-4 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                          </div>

                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
