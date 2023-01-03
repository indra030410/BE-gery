# BE-gery

## Database
- Database = MySQL
- Create database 'dummy-db'
- Execute This DDL on Your local DB:
  - CREATE TABLE `employee` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `position` varchar(100) DEFAULT NULL,
  `createdate` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
)
  - INSERT INTO `employee` VALUES (1,'david','jhones','head of commercial','2022-01-11 09:13:14'),(2,'luca','modric','head of technology','2022-01-11 09:13:14'),(3,'martines','pasava','manager of technology','2022-01-11 09:13:14'),(4,'maria','cosova','staff of technology','2022-01-11 09:13:14');

## States
- Create NodeJS/NestJS project
- MySQL > 5.x.x
- Create your local branch: test
- Pull Request from test to main branch, then set assigner to "indra030410"

## Expectation
- Create APIs & rules
  - view all data (GET)
    - URL: /view/all
    - Body: {}
  - create data (POST)
    - URL: /create
    - Body: {"firstname":"david";"lastname":"jhones";"position":"manager of commercial"}
- Create validation message response if it doesn't match with the rules 