import React from "react";

export const Navigation = ({ isSignedIn, onRouteChange }) => {
  const onSignOut = () => {
    onRouteChange("signin");
  };
  const goToSignIn = () => {
    onRouteChange("signin");
  };
  const goToRegister = () => {
    onRouteChange("resister");
  };
  return (
    <nav style={{ display: "flex", justifyContent: "flex-end" }}>
      {isSignedIn ? (
        <p
          className="f3 link dim black underline p3 pointer mr4"
          onClick={onSignOut}
        >
          Sign out
        </p>
      ) : (
        <>
          <p
            className="f3 link dim black underline p3 pointer mr4"
            onClick={goToSignIn}
          >
            Sign In
          </p>
          <p
            className="f3 link dim black underline p3 pointer mr4"
            onClick={goToRegister}
          >
            Register
          </p>
        </>
      )}
    </nav>
  );
};
