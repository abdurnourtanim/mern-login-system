import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProfileOverlay from "../components/ProfileOverlay";
import UserAvatar from "../components/UserAvatar";
import UserBio from "../components/UserBio";
import UserDetails from "../components/UserDetails";
import { logoutAction } from "../container/actions";

export default function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const route = () => {
    const token = localStorage.getItem("x-access-token");
    return token ? true : false;
  };

  useEffect(() => {
    if (!route()) {
      navigate("/login");
    }
  }, [navigate]);

  const logout = () => {
    dispatch(logoutAction());
    navigate("/login");
  };

  const user = {
    photo: "https://avatars.githubusercontent.com/u/71883296?v=4",
    name: "Abdur Nour Tanim",
    collage: "University of Computer Science",
    address: {
      city: "Chattogram",
      country: "Bangladesh",
    },
    company: {
      name: "Coding for KiDs",
      position: "CEO",
    },
  };

  return (
    <>
      <Navbar transparent logout={logout} />
      <main className="profile-page">
        <ProfileOverlay />
        <section className="relative py-16 bg-gray-300">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-80">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <UserAvatar photo={user.photo} />
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <Button type="submit">Connect</Button>{" "}
                    </div>
                  </div>
                  <UserDetails />
                </div>
                <UserBio user={user} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />/
    </>
  );
}
