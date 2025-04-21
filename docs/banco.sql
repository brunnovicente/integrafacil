-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           10.4.32-MariaDB - mariadb.org binary distribution
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              12.7.0.6850
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Copiando estrutura do banco de dados para integrafacil
CREATE DATABASE IF NOT EXISTS `integrafacil` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `integrafacil`;

-- Copiando estrutura para tabela integrafacil.usuarios
CREATE TABLE IF NOT EXISTS `usuarios` (
                                          `id` int(11) NOT NULL AUTO_INCREMENT,
    `username` varchar(100) NOT NULL,
    `password` varchar(250) NOT NULL,
    `email` varchar(255) DEFAULT NULL,
    `categoria` int(11) DEFAULT NULL,
    `status` int(11) DEFAULT NULL,
    `codigo` varchar(20) DEFAULT NULL,
    `createdAt` datetime NOT NULL,
    `updatedAt` datetime NOT NULL,
    PRIMARY KEY (`id`)
    ) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Copiando dados para a tabela integrafacil.usuarios: ~2 rows (aproximadamente)
INSERT INTO `usuarios` (`id`, `username`, `password`, `email`, `categoria`, `status`, `codigo`, `createdAt`, `updatedAt`) VALUES
                                                                                                                              (1, 'bruno', '$2b$10$W/SI.dFwX8Gukay2Jw/OVe9aD.fQETA191cb6cRWNJUvc8hlUmERe', 'brunnovicente@gmail.com', 1, 1, NULL, '2025-04-20 23:21:09', '2025-04-20 23:21:09'),
                                                                                                                              (2, 'vicente', '$2b$10$yCapDrjmrHoZL1mNZkrIuOrd6xeulDSgDYU3U2ytl4fiaIec2jTjW', 'brunnovicente@hotmail.com', 1, 1, NULL, '2025-04-20 23:23:01', '2025-04-20 23:23:01'),
                                                                                                                              (3, 'teste', '$2b$10$aRrQZzQz/lxNLOgfNa0Ec.bNbFxur6bZzL8xUxnEsMUgUC2kWq04.', 'teste@gmail.com', 1, 1, NULL, '2025-04-20 23:25:16', '2025-04-20 23:25:16');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
