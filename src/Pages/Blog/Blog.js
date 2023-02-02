import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const Blog = () => {
  const x = useContext(AuthContext);
  console.log(x);
  return (
    <section className="mt-20 max-w-[1300px] mx-auto">
      <div>
        <h2>Cooming soon</h2>
      </div>
    </section>
  );
};

export default Blog;
