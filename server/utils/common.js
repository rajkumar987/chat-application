function isObjectValid(obj) {
  return (
    obj.hasOwnProperty("first_name") &&
    obj.first_name !== null &&
    obj.hasOwnProperty("last_name") &&
    obj.last_name !== null &&
    obj.hasOwnProperty("usernames") &&
    obj.usernames !== null &&
    obj.hasOwnProperty("about") &&
    obj.about !== null &&
    obj.hasOwnProperty("profile_pic") &&
    obj.profile_pic !== null &&
    obj.hasOwnProperty("cloudinary_id") &&
    obj.cloudinary_id !== null
  );
}

module.exports = {
  isObjectValid,
};
