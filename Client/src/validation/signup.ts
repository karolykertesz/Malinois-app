export const constraints = {
  fname: {
    presence: true,
    format: {
      pattern: /^[a-zA-Zs\s]*$/,
      message: "Not supported Characters",
    },
    length: { minimum: 3 },
  },
  surname: {
    presence: true,
    format: {
      pattern: /^[a-zA-Zs\s]*$/,
      message: "Not supported Characters",
    },
    length: { minimum: 3 },
  },
  email: {
    presence: true,
    email: true,
    format: {
      pattern: "[^<>{}()]+",
      message: "Not supported Characters",
    },
  },
  password: {
    format: {
      pattern: "[^<>{}()]+",
      message: "Not supported Characters",
    },
  },
  city: {
    presence: true,
    format: {
      pattern: "[^<>{}()]+",
      message: "Not supported Characters",
    },
  },
  area_code: {
    presence: true,
    length: { minimum: 4, maximum: 5, message: "Wrong area code length" },
    format: {
      pattern: "[a-z0-9]+",
      message: "can only contain a-z and 0-9",
    },
    numericality: {
      onlyInteger: true,
      message: "Wrong Area Code value",
    },
  },
  phone: {
    presence: true,
    format: {
      pattern: "[a-z0-9]+",
      message: "can only contain a-z and 0-9",
    },
  },
  street: {
    presence: true,
    format: {
      pattern: "[^<>{}()]+",
      message: "Not supported Characters",
    },
  },
  appartment: {
    presence: true,
    format: {
      pattern: "[^<>{}()]+",
      message: "Not supported Characters",
    },
  },
  display_name: {
    presence: true,
    format: {
      pattern: "[^<>{}()]+",
      message: "Not supported Characters",
    },
    length: { minimum: 3, maximum: 20, message: "Name too, long or too, sort" },
  },
};
