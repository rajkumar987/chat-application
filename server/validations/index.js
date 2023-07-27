const { object, string } = require("zod");

const sessionSchema = object({
  body: object({
    mobile: string({
      required_error: "Mobile Number is required",
    }).refine((val) => /^[6-9][0-9]{9}$/.test(val), {
      message: "Mobile Number should be of length 10 and contain only digits",
    }),
  }),
});

module.exports = { sessionSchema };
