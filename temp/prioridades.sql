-- Table: public.prioridades

-- DROP TABLE IF EXISTS public.prioridades;

CREATE TABLE IF NOT EXISTS public.prioridades
(
    id integer NOT NULL DEFAULT nextval('prioridades_id_seq'::regclass),
    dim_mes integer NOT NULL,
    ano integer NOT NULL,
    priori text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT prioridades_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.prioridades
    OWNER to ydiyghfkmzredl;

COMMENT ON TABLE public.prioridades
    IS 'TABELA DE PRIORIDADES';
