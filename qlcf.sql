-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1:3306
-- Thời gian đã tạo: Th10 19, 2022 lúc 06:41 AM
-- Phiên bản máy phục vụ: 5.7.36
-- Phiên bản PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `qlcf`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `area`
--

DROP TABLE IF EXISTS `area`;
CREATE TABLE IF NOT EXISTS `area` (
  `id_area` int(11) NOT NULL,
  `name_area` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id_area`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `area`
--

INSERT INTO `area` (`id_area`, `name_area`) VALUES
(1, 'Khu A'),
(2, 'Khu B'),
(3, 'Khu C');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `category`
--

DROP TABLE IF EXISTS `category`;
CREATE TABLE IF NOT EXISTS `category` (
  `id_category` int(11) NOT NULL AUTO_INCREMENT,
  `name_category` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id_category`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `category`
--

INSERT INTO `category` (`id_category`, `name_category`) VALUES
(1, 'Cà Phê'),
(2, 'Trà Sữa'),
(3, 'Soda');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `dish`
--

DROP TABLE IF EXISTS `dish`;
CREATE TABLE IF NOT EXISTS `dish` (
  `id_dish` int(30) NOT NULL AUTO_INCREMENT,
  `name_dish` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price_dish` double NOT NULL,
  `picture_dish` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_category` int(11) NOT NULL,
  `time_add` datetime NOT NULL,
  `time_update` datetime NOT NULL,
  PRIMARY KEY (`id_dish`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `dish`
--

INSERT INTO `dish` (`id_dish`, `name_dish`, `price_dish`, `picture_dish`, `id_category`, `time_add`, `time_update`) VALUES
(2, 'Capuchino Nóng', 30000, 'https://artcoffee.vn/wp-content/uploads/2020/09/tu-a-z-ve-capuchino_nhung-cach-pha-ca-phe-capuchino-ngon.jpg', 1, '2022-10-19 06:33:34', '2022-10-19 06:33:34'),
(3, 'Trà Sữa Dâu', 25000, 'data:image/jpeg;base64,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', 2, '2022-10-19 06:33:34', '2022-10-19 06:33:34'),
(4, 'Trà Sữa Matcha', 25000, 'https://cdn.dayphache.edu.vn/wp-content/uploads/2018/02/tra-sua-matcha.jpg', 2, '2022-10-19 06:33:34', '2022-10-19 06:33:34'),
(5, 'Soda Chanh Dây', 30000, 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmkids.vn%2Fshop%2Fthuc-uong%2Fsoda%2Fsoda-chanh-day%2F&psig=AOvVaw1QU0xUBYe0Ae5UoAOzYfU0&ust=1666247829219000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCLDfp4PX6_oCFQAAAAAdAAAAABAR', 3, '2022-10-19 06:36:52', '2022-10-19 06:36:52'),
(6, 'Soda Việt Quất', 25000, 'https://www.google.com/url?sa=i&url=http%3A%2F%2Froplus.vn%2Fsoda-viet-quat&psig=AOvVaw2oy9x3qxvtoOYq6Qf6piiQ&ust=1666247896978000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCNjugKTX6_oCFQAAAAAdAAAAABAb', 3, '2022-10-19 06:36:52', '2022-10-19 06:36:52'),
(7, 'Cà Phê Chồn', 35000, 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcaphenguyenchat.net%2Fca-phe-chon%2Fca-phe-chon-co-vi-gi-va-cach-nhan-biet-ly-cafe-chon-nguyen-chat%2F&psig=AOvVaw0W62z5H_wD1qyo3BnUhVSA&ust=1666247969833000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCLD_68rX6_oCFQAAAAAdAAAAABAD', 1, '2022-10-19 06:36:52', '2022-10-19 06:36:52');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `order`
--

DROP TABLE IF EXISTS `order`;
CREATE TABLE IF NOT EXISTS `order` (
  `id_bill` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `list_order` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_table` int(11) NOT NULL,
  `total_amount` double NOT NULL,
  `time_create` datetime NOT NULL,
  `time_update` datetime NOT NULL,
  `status` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id_bill`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `permission`
--

DROP TABLE IF EXISTS `permission`;
CREATE TABLE IF NOT EXISTS `permission` (
  `id_permission` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name_permission` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id_permission`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `permission`
--

INSERT INTO `permission` (`id_permission`, `name_permission`) VALUES
('a', 'Admin'),
('s', 'Nhân Viên'),
('b', 'Bartender'),
('c', 'Thu Ngân');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `shift`
--

DROP TABLE IF EXISTS `shift`;
CREATE TABLE IF NOT EXISTS `shift` (
  `id_shift` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_user` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `start_time` datetime NOT NULL,
  `end_time` datetime NOT NULL,
  `time_check_in` datetime NOT NULL,
  `time_check_out` datetime NOT NULL,
  `shift_day` date NOT NULL,
  PRIMARY KEY (`id_shift`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `table`
--

DROP TABLE IF EXISTS `table`;
CREATE TABLE IF NOT EXISTS `table` (
  `id_table` int(11) NOT NULL,
  `name_table` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id_table`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `table`
--

INSERT INTO `table` (`id_table`, `name_table`, `status`) VALUES
(1, 'Bàn Số 1', 'Trống'),
(2, 'Bàn Số 2', 'Trống'),
(3, 'Bàn Số 3', 'Trống'),
(4, 'Bàn Số 4', 'Trống');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id_user` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_name` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `full_name` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_permission` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `time_create` datetime NOT NULL,
  `time_update` datetime NOT NULL,
  PRIMARY KEY (`id_user`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `user`
--

INSERT INTO `user` (`id_user`, `user_name`, `password`, `full_name`, `id_permission`, `time_create`, `time_update`) VALUES
('us01', 'phuong', '20011312', 'Tô Hoài Phương', 'a', '2022-10-05 00:00:00', '2022-10-19 00:00:00'),
('us02', 'thang', 'thang', 'Hà Minh Thắng', 's', '2022-10-12 00:00:00', '2022-10-13 00:00:00');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
