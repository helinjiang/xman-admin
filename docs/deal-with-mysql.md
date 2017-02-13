与 MySQL 相关的实现
===

数据库配置在 `/src/common/config/db.js` 中修改。


```sql
DROP TABLE IF EXISTS `x_user`;

CREATE TABLE `x_user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '',
  `password` varchar(255) NOT NULL DEFAULT '',
  `type` tinyint(11) NOT NULL DEFAULT '1' COMMENT '1 为管理员  2 为编辑',
  `status` tinyint(11) NOT NULL DEFAULT '1' COMMENT '1 为有效 2 为禁用',
  `last_login_time` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
```