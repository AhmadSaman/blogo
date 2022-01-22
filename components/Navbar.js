/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  const user = null;
  const username = null;
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link href={"/"}>
            <button className="btn-logo">Feed</button>
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
                <img src={`${user?.photoURL}`} alt={`${username}`} />
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
