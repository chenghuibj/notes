```
C:\Users\Administrator>expdp epcf4/epcpass directory=DMP dumpfile=epcf4.dmp logf
ile=epcf4.log

create tablespace EPCf4
datafile 'D:\workspace\db\oracle\epcf4.dbf'
size 100M
autoextend on;

select * from dba_directories

create directory dmp as 'D:\DMP'
grant read,write on directory dmp to kernel


C:\Users\cccc>impdp epcf4/epcpass directory=dmp dumpfile=EPCF4.dmp

set oracle_sid=orcl

```
