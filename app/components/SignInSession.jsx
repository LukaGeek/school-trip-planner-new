"use client";

import { signOut, useSession } from "next-auth/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from "@heroui/react";
import Link from "next/link";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { GET_WHITELISTED_USER } from "@/graphql/queries";
import { useQuery } from "@apollo/client/react";

export default function SignInSession() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { loading, error, data } = useQuery(GET_WHITELISTED_USER);

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.refresh();
  };

  if (loading || status === "loading")
    return <Loader className="animate-spin text-white" />;
  if (error) return <div className="text-red-500">Error: {error.message}</div>;

  const whitelist = data?.whitelistedUser;
  console.log(data);

  const isWhitelisted = whitelist?.some(
    (user) => user?.email === session?.user?.email,
  );

  return (
    <div className="flex items-center gap-4">
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform cursor-pointer hover:scale-105 shadow-md"
            src={session?.user?.image || undefined}
          />
        </DropdownTrigger>

        <DropdownMenu
          className="bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg rounded-2xl w-64 py-3 text-white"
          aria-label="User Menu"
        >
          {!session?.user ? (
            <>
              <DropdownItem
                textValue="Sign In"
                key="sign_in"
                className="px-4 py-3 hover:bg-white/10 text-blue-400 font-semibold transition rounded-md"
              >
                <Link href="/login" prefetch={false}>
                  Sign In
                </Link>
              </DropdownItem>

              <DropdownItem
                textValue="Sign Up"
                key="sign_up"
                className="px-4 py-3 hover:bg-white/10 text-green-400 font-semibold transition rounded-md"
              >
                <Link href="/register" prefetch={false}>
                  Sign Up
                </Link>
              </DropdownItem>
            </>
          ) : (
            <>
              <DropdownItem
                textValue="Username"
                key="user_name"
                className="px-4 py-2 cursor-default text-sm text-white/70"
              >
                {session.user.name && (
                  <div className="flex gap-1">
                    <div>Username:</div>
                    <div className="font-semibold text-white">
                      {session.user.name}
                    </div>
                  </div>
                )}
              </DropdownItem>

              <DropdownItem
                textValue="Email"
                key="user_email"
                className="px-4 py-2 cursor-default text-sm text-white/70"
              >
                {session.user.email && (
                  <div className="flex gap-1">
                    <div>Email:</div>
                    <div className="font-semibold text-white">
                      {session.user.email}
                    </div>
                  </div>
                )}
              </DropdownItem>

              <DropdownItem
                textValue="Status"
                key="user_status"
                className="px-4 py-2 cursor-default text-sm text-white/70"
              >
                <div className="flex gap-1">
                  <div>Status:</div>
                  <div
                    className={`font-semibold ${
                      isWhitelisted ? "text-blue-400" : "text-green-400"
                    }`}
                  >
                    {isWhitelisted ? "Admin" : "User"}
                  </div>
                </div>
              </DropdownItem>

              <DropdownItem textValue="divider">
                <div className="my-2 mx-2 h-px bg-white/10" />
              </DropdownItem>

              {isWhitelisted && (
                <>
                  <DropdownItem
                    textValue="Manage Whitelist"
                    key="whitelist"
                    className="px-4 py-2 hover:bg-white/10 text-blue-400 font-semibold transition rounded-md"
                  >
                    <Link
                      href="/whitelist"
                      className="block w-full"
                      prefetch={false}
                    >
                      Manage Whitelist
                    </Link>
                  </DropdownItem>

                  <DropdownItem
                    textValue="Manage Products"
                    key="products"
                    className="px-4 py-2 hover:bg-white/10 text-purple-400 font-semibold transition rounded-md"
                  >
                    <Link
                      href="/admin"
                      className="block w-full"
                      prefetch={false}
                    >
                      Manage Products
                    </Link>
                  </DropdownItem>
                </>
              )}

              <DropdownItem
                textValue="Sign Out"
                key="logout"
                onPress={handleSignOut}
                className="px-4 py-2 hover:bg-white/10 text-red-400 font-semibold transition rounded-md"
              >
                Sign Out
              </DropdownItem>
            </>
          )}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
