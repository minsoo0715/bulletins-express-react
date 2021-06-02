const Sequelize = require('sequelize');

    const sequelize = new Sequelize(
    'react_bulletin', // 데이터베이스 이름
    'root', // 유저 명
    '7334', // 비밀번호
     {
        'host': 'localhost', // 데이터베이스 호스트
        'dialect': 'mysql' // 사용할 데이터베이스 종류
    }
);


export default sequelize;