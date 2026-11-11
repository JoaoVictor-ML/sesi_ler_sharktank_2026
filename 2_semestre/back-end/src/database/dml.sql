USE gestao_refeitorio;

INSERT INTO usuarios
    (nome, email, senha, tipo_usuario)
VALUES
    ('Administrador Geral', 'eloisa@silva.com',
     '12345678', 'administrador_geral'),

    ('Administrador Geral', 'livia@morais.com',
     '59369305', 'administrador_geral'),

    ('Gestor', 'rosangela@conti.com',
     '87654321', 'gestor'),

    ('Coordenador', 'raquel@coimbra.com',
     '21346578', 'coordenador'),

    ('Coordenador', 'andrea@barrasa.com',
      '6835934', 'coodenador'),

    ('Professor', 'ederson@pinheiro.com',
     '10293847', 'professor');

    ('Professor', 'eliana@sambo.com',
      '5925386', 'professor');

SELECT id, nome, email, tipo_usuario, ativo
FROM usuarios;

UPDATE usuarios
SET nome = 'Coordenador Atualizado'
WHERE email = 'simone@grillo.com';

SELECT id, nome, email
FROM usuarios
WHERE tipo_usuario = 'professor';

DELETE FROM usuarios
WHERE email = 'paulo@cesar.com';
