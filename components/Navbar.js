/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../lib/context";

function Navbar() {
  const { user, username } = useContext(UserContext);

  return (
    <div className="navbar">
      <ul>
        <li>
          <Link href={"/"}>
            <button className="btn-logo">BLOGO</button>
          </Link>
        </li>
        {/* for the signed in users */}
        {username && (
          <>
            <li className="push-left">
              <Link href={"/admin"}>
                <button className="btn-blue">Write Posts</button>
              </Link>
            </li>
            <li>
              <Link href={`/${username}`}>
                <img
                  src={user?.photoURL || "/hacker.png"}
                  alt={`${username}`}
                />
              </Link>
            </li>
          </>
        )}
        {/* for non Signed in users */}
        {!username && (
          <>
            <li>
              <Link href={"/enter"}>
                <button className="btn-blue">Log in</button>
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
