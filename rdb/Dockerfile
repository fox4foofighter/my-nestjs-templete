FROM mysql:8.4
EXPOSE 3306

RUN mkdir /backup

ADD ./my.cnf /etc/mysql/conf.d/my.cnf
ADD ./sqls/* /docker-entrypoint-initdb.d

CMD ["mysqld"]
