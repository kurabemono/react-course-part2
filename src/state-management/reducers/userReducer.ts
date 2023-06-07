interface LoginAction {
  type: "LOGIN";
  user: string;
}

interface LogoutAction {
  type: "LOGOUT";
}

type Action = LoginAction | LogoutAction;

const userReducer = (user: string, action: Action): string => {
  switch (action.type) {
    case "LOGIN":
      return action.user;
    case "LOGOUT":
      return "";
  }
};

export default userReducer;
