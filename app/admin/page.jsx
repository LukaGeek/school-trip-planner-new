"use client";

import { useQuery } from "@apollo/client/react";
import { useSession } from "next-auth/react";
import { GET_TRIP_REQUESTS, GET_WHITELISTED_USER } from "@/graphql/queries";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Admin() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const {
    data: whitelistData,
    loading,
    error: WLerror,
  } = useQuery(GET_WHITELISTED_USER);

  useEffect(() => {
    if (status === "loading" || loading || !whitelistData) return;

    const whitelist = whitelistData?.whitelistedUser;
    console.log(data);

    const isWhitelisted = whitelist?.some(
      (user) => user?.email === session?.user?.email,
    );

    if (!isWhitelisted) {
      router.replace("/");
    }
  }, [session, status, whitelistData, loading, router]);

  return (
    <div className="p-10 text-white">
      <h1 className="text-3xl font-bold mb-8">Trip Requests</h1>
      <AdminTripRequests />
    </div>
  );
}

function AdminTripRequests() {
  const { data, loading } = useQuery(GET_TRIP_REQUESTS);

  console.log(data);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="space-y-4">
      {data.tripRequests.map((trip) => (
        <div
          key={trip.id}
          className="p-6 bg-white/10 rounded-xl border border-white/20"
        >
          <p>
            <b>Students:</b> {trip.students}
          </p>
          <p>
            <b>Parents:</b> {trip.parents}
          </p>
          <p>
            <b>Teachers:</b> {trip.teachers}
          </p>
          <p>
            <b>Destination:</b> {trip.destination}
          </p>
          <p>
            <b>Menu:</b> {trip.menu}
          </p>
          <p>
            <b>Total:</b> ₾{trip.total}
          </p>
        </div>
      ))}
    </div>
  );
}
