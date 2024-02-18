-- TODO: パスワードが決め打ちになっているので、変数に出来ないかは要検討
-- TODO: 権限に関しても要検討
CREATE USER 'root'@'%' IDENTIFIED BY 'secret';
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;