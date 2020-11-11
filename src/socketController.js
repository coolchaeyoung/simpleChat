import events from "./events";

const socketController = socket => {
    socket.on(events.setNickname, ({ nickname }) => {
        console.log(nickname);
        socket.nickname = nickname;
        socket.broadcase.emit(events.newUser, ({ nickname }));
    });
};

export default socketController;
