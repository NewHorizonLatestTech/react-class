import Profile from "./Profile";

export default function Gallery() {
    return (
      <div>
        <h1>Amazing scientists</h1>
        <div className="flex">
        <Profile />
        <Profile />
        <Profile />
        </div>
      </div>
    );
  }
  