import { getSession, useSession, signIn, signOut } from "next-auth/react";
    import Head from 'next/head';
    import Link from "next/link";
    import React from "react";
    
    function GoogleAuthPage() {
      const { data: session } = useSession();
    
      const signInButtonNode = () => {
        if (session) {
          return false;
        }

    
        return (
          <div>
            <Link href="/api/auth/signin" passHref>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  signIn();
                }}
              >
                Sign In
              </button>
            </Link>
          </div>
        );
      };
    
      const signOutButtonNode = () => {
        if (!session) {
          return false;
        }
    
        return (
          <div>
            <Link href="/api/auth/signout" passHref>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                Sign Out
              </button>
            </Link>
          </div>
        );
      };
    
      if (!session) {
        return (
          <div className="hero">
            <div className="navbar">
              {/* {signOutButtonNode()} */}
              {signInButtonNode()}
            </div>
            <div className="text">
              {"You aren't authorized to view this page"}
            </div>
          </div>
        )
      }
    
      return (
        <div className="hero">
          <Head>
            <title>Index Page</title>
          </Head>
          <div className="navbar">
            {signOutButtonNode()}
            {/* {signInButtonNode()} */}
          </div>
          <div className="text">
            Hello world
          </div>
        </div>
      );
    };
    
    export async function getServerSideProps(context) {
      return {
        props: {
          session: await getSession(context),
        },
      }
    }
    
    export default GoogleAuthPage;