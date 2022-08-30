import React from "react";

const styles = {
  credits: `font-bold text-white pb-5`,
  username: `hover:underline`,
};

const Credits = () => {
  return (
    <div className={styles.credits}>
      Made with <span className="text-red-500">❤</span> by{" "}
      <a
        className={styles.username}
        href="https://github.com/mafzaldev"
        target={"_blank"}
        rel="noreferrer"
      >
        @mafzaldev
      </a>
    </div>
  );
};

export default Credits;
