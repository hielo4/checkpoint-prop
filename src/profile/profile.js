import PropTypes from "prop-types";

function Profile({ children, fullname, bio, profession }) {
  const styleObject = { color: "red", textAlign: "center" };
  return (
    <div style={styleObject}>
      {children}
      <h3 className="profile-title">{fullname}</h3>
      <p className="bio">{bio}</p>
      <p className="profession">{profession}</p>
    </div>
  );
}
Profile.propTypes = {
  fullname: PropTypes.string,
};

Profile.defaultProps = {
  fullname: "mohammed",
  bio: "i am 30 years old man",
  profession: "achritecht",
};

export default Profile;
