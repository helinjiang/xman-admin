/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : xman

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2017-02-14 11:28:27
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for x_customer
-- ----------------------------
DROP TABLE IF EXISTS `x_customer`;
CREATE TABLE `x_customer` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '' COMMENT '姓名',
  `sex` tinyint(4) NOT NULL DEFAULT '0' COMMENT '0未知 1男 2女',
  `telephone` char(11) DEFAULT '' COMMENT '电话号码',
  `email` varchar(255) NOT NULL DEFAULT '',
  `birthday` date DEFAULT NULL,
  `avatar` varchar(255) DEFAULT '',
  `address` varchar(255) DEFAULT '',
  `status` tinyint(4) NOT NULL DEFAULT '1' COMMENT '1 为有效 -1 为无效',
  `remark` text,
  `create_time` datetime NOT NULL,
  `last_modify_time` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of x_customer
-- ----------------------------

-- ----------------------------
-- Table structure for x_user
-- ----------------------------
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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of x_user
-- ----------------------------
INSERT INTO `x_user` VALUES ('1', 'admin', '$2a$08$A.UC4MCES5LZm.BQnUZZdO9H9.Lh8rCD5p/qhKatRmk1HCUSG/PmC', '1', '1', '2017-02-13 19:44:27');
