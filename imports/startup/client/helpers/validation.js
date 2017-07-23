/*
* Auth Form Checks
*/
export const authNameCheck = {
  name: {
    length: {
      maximum: 30,
      message: "must be at most 30 characters"
    }
  },
}
export const authEmailCheck = {
  email: {
    presence: true,
    email: true,
    length: {
      minimum: 0,
      maximum: 50,
      message: "must be at most 50 characters"
    }
  },
}
export const authPasswordCheck = {
  password: {
    presence: true,
    length: {
      minimum: 6,
      message: "must be at least 6 characters"
    }
  }
}

/*
* Contact Form Checks
*/
export const nameCheck = {
  name: {
    presence: true,
    length: {
      minimum: 0,
      maximum: 50,
      message: "must be at most 50 characters"
    }
  },
};
export const emailCheck = {
  email: {
    email: true,
    length: {
      minimum: 0,
      maximum: 50,
      message: "must be at most 50 characters"
    }
  },
}

export const phoneCheck = {
  phone: {
    numericality: {
      greaterThan: 0,
      lessThanOrEqualTo: 9999999999999999999,
    }
  },
}
export const urlCheck = {
  imageUrl: {
    url: true,
    length: {
      maximum: 100,
      message: "must be at most 100 characters"
    }
  },
}
