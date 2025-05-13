
CREATE DATABASE dmc;
USE dmc;

CREATE TABLE IF NOT EXISTS usuario(
  id  INT NOT NULL,
  nome VARCHAR(90) NULL,
  email VARCHAR(90) NULL,
  telefone VARCHAR(9) NULL,
  senha VARCHAR(60) NULL,
  PRIMARY KEY (id),
  UNIQUE INDEX email_UNIQUE (email)
  );

CREATE TABLE IF NOT EXISTS missao(
  id INT NOT NULL,
  fkusuario INT NOT NULL,
  numero_missao VARCHAR(2) NULL,
  secreta INT NULL,
  time_missao VARCHAR(45) NULL,
  orbs VARCHAR(100) NULL,
  stylish VARCHAR(45) NULL,
  item_used VARCHAR(45) NULL,
  PRIMARY KEY (id, fkusuario),
  CONSTRAINT fk_missao_usuario FOREIGN KEY (fkusuario) REFERENCES usuario (id),
  CONSTRAINT chk_secreta CHECK (secreta = 0 or secreta = 1),
  CONSTRAINT chk_numero_missao CHECK(numero_missao >= 1 or numero_missao <= 20)
  );

drop user if exists dmc;
create user dmc identified by 'dmc123';
grant all privileges on dmc to 'dmc';

