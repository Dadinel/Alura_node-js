CREATE DATABASE `casadocodigo_nodejs` /*!40100 DEFAULT CHARACTER SET utf8 */;

CREATE TABLE `casadocodigo_nodejs`.`produtos` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(255) NULL,
  `descricao` TEXT NULL,
  `preco` DECIMAL(10,2) NULL,
  PRIMARY KEY (`id`))
COMMENT = '	';