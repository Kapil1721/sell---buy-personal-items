-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jul 01, 2024 at 11:17 AM
-- Server version: 8.3.0
-- PHP Version: 8.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sellpersonalitem`
--

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
CREATE TABLE IF NOT EXISTS `comment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `listedItemPost_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `Comment_listedItemPost_id_fkey` (`listedItemPost_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `donations`
--

DROP TABLE IF EXISTS `donations`;
CREATE TABLE IF NOT EXISTS `donations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usersId` int DEFAULT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `countryCode` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `items` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `amount` decimal(10,2) DEFAULT NULL,
  `createdAt` datetime(3) DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `Donations_usersId_fkey` (`usersId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `features`
--

DROP TABLE IF EXISTS `features`;
CREATE TABLE IF NOT EXISTS `features` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `planId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `Features_planId_fkey` (`planId`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `features`
--

INSERT INTO `features` (`id`, `name`, `description`, `active`, `planId`) VALUES
(1, 'Wide audience reach', 'Wide audience reach', 1, 1),
(2, 'Verified Users', 'Verified Users', 1, 1),
(3, 'Premium Support', 'Premium Support', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
CREATE TABLE IF NOT EXISTS `images` (
  `id` int NOT NULL AUTO_INCREMENT,
  `imagesType` enum('GALLARY','ATTACHMENTS') COLLATE utf8mb4_unicode_ci DEFAULT 'GALLARY',
  `image` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `listedItem_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `Images_listedItem_id_fkey` (`listedItem_id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`id`, `imagesType`, `image`, `listedItem_id`) VALUES
(1, 'GALLARY', '1719829759150@Five-Trending-Fashions-For-Kids-In-Summer-360x240.jpg', 1),
(2, 'GALLARY', '1719829759198@Gold-Black-White-Crossbody-purse-300x267.jpg', 1);

-- --------------------------------------------------------

--
-- Table structure for table `likes`
--

DROP TABLE IF EXISTS `likes`;
CREATE TABLE IF NOT EXISTS `likes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `post_id` int NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `modifiedAt` datetime(3) NOT NULL,
  `listedItemPost_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `Likes_listedItemPost_id_fkey` (`listedItemPost_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `listeditem`
--

DROP TABLE IF EXISTS `listeditem`;
CREATE TABLE IF NOT EXISTS `listeditem` (
  `post_id` int NOT NULL AUTO_INCREMENT,
  `slug` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `desription` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `category` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expires` datetime(3) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `status` enum('Active','Pending','Draft') COLLATE utf8mb4_unicode_ci DEFAULT 'Draft',
  `userId` int NOT NULL,
  PRIMARY KEY (`post_id`),
  UNIQUE KEY `ListedItem_slug_key` (`slug`),
  KEY `ListedItem_userId_fkey` (`userId`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `listeditem`
--

INSERT INTO `listeditem` (`post_id`, `slug`, `name`, `desription`, `category`, `expires`, `createdAt`, `updatedAt`, `active`, `status`, `userId`) VALUES
(1, '1719829807922Books', 'Books', '<p>This book is one of the best seller\'s book</p>', 'Clothing, Shoes, & Accessories', NULL, '2024-07-01 10:30:07.924', '2024-07-01 10:37:40.430', 1, 'Active', 1);

-- --------------------------------------------------------

--
-- Table structure for table `memberships`
--

DROP TABLE IF EXISTS `memberships`;
CREATE TABLE IF NOT EXISTS `memberships` (
  `id` int NOT NULL AUTO_INCREMENT,
  `planId` int NOT NULL,
  `startDate` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `endDate` datetime(3) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `paymentMethod` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `paymentStatus` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `Memberships_planId_fkey` (`planId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `plan`
--

DROP TABLE IF EXISTS `plan`;
CREATE TABLE IF NOT EXISTS `plan` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `actualPrice` decimal(10,2) NOT NULL DEFAULT '0.00',
  `discountType` enum('Flat','Percentage') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Flat',
  `discount` double NOT NULL DEFAULT '0',
  `duration` int NOT NULL,
  `currency` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `active` tinyint(1) DEFAULT '1',
  `createdAt` datetime(3) DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `plan`
--

INSERT INTO `plan` (`id`, `name`, `description`, `price`, `actualPrice`, `discountType`, `discount`, `duration`, `currency`, `active`, `createdAt`, `updatedAt`) VALUES
(1, 'Basic', 'Basic Features', 47.00, 0.00, 'Flat', 0, 90, '$', 1, '2024-07-01 15:15:40.561', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `countryCode` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `contactNumber` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userType` enum('Recipient','Donor') COLLATE utf8mb4_unicode_ci DEFAULT 'Recipient',
  `password` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `verification` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `verified` tinyint(1) DEFAULT '0',
  `active` tinyint(1) DEFAULT '1',
  `role` enum('USER','ADMIN') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'USER',
  `createdAt` datetime(3) DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) DEFAULT NULL,
  `membershipId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Users_username_key` (`username`),
  UNIQUE KEY `Users_email_key` (`email`),
  KEY `Users_membershipId_fkey` (`membershipId`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `name`, `countryCode`, `contactNumber`, `userType`, `password`, `verification`, `verified`, `active`, `role`, `createdAt`, `updatedAt`, `membershipId`) VALUES
(1, 'shyam', 'shyam.pal@eglobalteam.com', 'Shyam Varan Pal', '+91', '9506072678', 'Recipient', '$2a$12$zTj4hyHmJblEKKFXoDLH8.pwaUaqNlO7MTJp1L8uDa8.Q38ezKEme', '3879563e52a64ab72cea4e697930eab43a1cd08e7d010559', 0, 1, 'USER', '2024-07-01 09:57:52.015', '2024-07-01 09:57:52.015', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `views`
--

DROP TABLE IF EXISTS `views`;
CREATE TABLE IF NOT EXISTS `views` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `postId` int NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Views_postId_fkey` (`postId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
