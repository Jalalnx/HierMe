-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Generation Time: Mar 05, 2022 at 03:45 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hiremev2`
--

-- --------------------------------------------------------

--
-- Table structure for table `attachments`
--

CREATE TABLE `attachments` (
  `id` int(11) NOT NULL,
  `path` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `EmploymentApplicationId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `employmentapplications`
--

CREATE TABLE `employmentapplications` (
  `id` int(11) NOT NULL,
  `job_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `attachments_id` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `views` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `EmploymentApplicationId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `institutes`
--

CREATE TABLE `institutes` (
  `id` int(11) NOT NULL,
  `CompanyName` varchar(255) DEFAULT NULL,
  `workFiled` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `adress` varchar(255) DEFAULT NULL,
  `Email` varchar(255) DEFAULT NULL,
  `fax` varchar(255) DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `phone` int(11) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `institutes`
--

INSERT INTO `institutes` (`id`, `CompanyName`, `workFiled`, `location`, `adress`, `Email`, `fax`, `logo`, `phone`, `photo`, `createdAt`, `updatedAt`) VALUES
(1, 'مياس للصرافه ', 'الاوراق الماليه ', '123456-123456', 'الخرطوم - شارع السيد عبدالرحمن', 'asd@gmail.com', '123456', 'gvbmykfuiluilf', 6726732, 'igsdfgsjkf', '2022-03-03 18:07:23', '2022-03-03 18:07:23'),
(2, 'شركه دروت القابضه لاعمال غير المحدوده', 'كل الاعمال وصفقاتى العمل', '348792-2389264', 'خرطوم 2 شارع 1 ', 'DDdd@gmail.com', '6542752378934', '23789034', 43785, 'hekj34y89yhiot', '2022-03-03 18:09:43', '2022-03-03 18:09:43');

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` int(11) NOT NULL,
  `job` varchar(255) DEFAULT NULL,
  `jobdescription` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `salary` int(11) DEFAULT NULL,
  `requirements` text DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `AprovedByAdmin` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `instituteId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `jobs`
--

INSERT INTO `jobs` (`id`, `job`, `jobdescription`, `location`, `salary`, `requirements`, `status`, `AprovedByAdmin`, `createdAt`, `updatedAt`, `instituteId`) VALUES
(1, 'سباك', 'القيام باعمل تركيب و صيانه المجاري المائيه', 'الخرطوم - امدرمان', 10000, 'شهاده فنيه\r\nخبره سنه \r\nمعدات كامله', 0, 1, '2022-03-03 17:50:14', '2022-03-03 17:50:14', 2),
(2, 'فني كهرباء', 'توصيل كهرباء عامه لموسسات و الصيانه', 'الخرطوم - بحري ', 10000, 'شخبره سنتينهاد فنيه', 1, 0, '2022-03-03 17:55:26', '2022-03-03 17:55:26', 1),
(5, 'سائق خاص ', 'يقوم بالتنقل و السفر من منطقه لاخرى', 'الخرطوم- الرياض-', 50000, 'رخصه قياده عامه \r\nشهاده جامعيه\r\nخلو طرف من الخدمه الوطنيه ', 1, 1, '2022-03-03 18:03:08', '2022-03-03 18:03:08', 2),
(6, 'سائق خاص ', 'يقوم بالتنقل و السفر من منطقه لاخرى', 'الخرطوم- الرياض-', 50000, 'رخصه قياده عامه \r\nشهاده جامعيه\r\nخلو طرف من الخدمه الوطنيه ', 0, 1, '2022-03-03 18:03:08', '2022-03-03 18:03:08', 1),
(7, 'سائق خاص ', 'يقوم بالتنقل و السفر من منطقه لاخرى', 'الخرطوم- الرياض-', 50000, 'رخصه قياده عامه \r\nشهاده جامعيه\r\nخلو طرف من الخدمه الوطنيه ', 0, 1, '2022-03-03 18:03:08', '2022-03-03 18:03:08', 1),
(8, 'سائق خاص ', 'يقوم بالتنقل و السفر من منطقه لاخرى', 'الخرطوم- الرياض-', 50000, 'رخصه قياده عامه \r\nشهاده جامعيه\r\nخلو طرف من الخدمه الوطنيه ', 0, 0, '2022-03-03 18:03:08', '2022-03-03 18:03:08', 2),
(9, 'سائق خاص ', 'يقوم بالتنقل و السفر من منطقه لاخرى', 'الخرطوم- الرياض-', 50000, 'رخصه قياده عامه \r\nشهاده جامعيه\r\nخلو طرف من الخدمه الوطنيه ', 0, 1, '2022-03-03 18:03:08', '2022-03-03 18:03:08', 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phone` int(11) DEFAULT NULL,
  `Email` varchar(255) DEFAULT NULL,
  `adress` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `OPT` int(11) DEFAULT NULL,
  `Email_Verfit` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `phone`, `Email`, `adress`, `gender`, `photo`, `password`, `OPT`, `Email_Verfit`, `createdAt`, `updatedAt`) VALUES
(1, 'abd Alrhaeem ', 2147483647, 'AJKHjks@j.com', 'eiour0894', 'male', 'https://res.cloudinary.com/duia5t6yl/image/upload/v1646323343/user/AJKHjks%40j.com.webp', '$2b$08$swgz.TOxFv8RPB.l6KONZuj.8Xx1q0EKJC.YzbcYyysMcSWokM77i', 6005, 1, '2022-03-03 16:02:20', '2022-03-03 16:02:20');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `attachments`
--
ALTER TABLE `attachments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `EmploymentApplicationId` (`EmploymentApplicationId`);

--
-- Indexes for table `employmentapplications`
--
ALTER TABLE `employmentapplications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `EmploymentApplicationId` (`EmploymentApplicationId`);

--
-- Indexes for table `institutes`
--
ALTER TABLE `institutes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `instituteId` (`instituteId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `attachments`
--
ALTER TABLE `attachments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `employmentapplications`
--
ALTER TABLE `employmentapplications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `institutes`
--
ALTER TABLE `institutes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `attachments`
--
ALTER TABLE `attachments`
  ADD CONSTRAINT `attachments_ibfk_1` FOREIGN KEY (`EmploymentApplicationId`) REFERENCES `employmentapplications` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `employmentapplications`
--
ALTER TABLE `employmentapplications`
  ADD CONSTRAINT `employmentapplications_ibfk_1` FOREIGN KEY (`EmploymentApplicationId`) REFERENCES `employmentapplications` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `jobs`
--
ALTER TABLE `jobs`
  ADD CONSTRAINT `jobs_ibfk_1` FOREIGN KEY (`instituteId`) REFERENCES `institutes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
