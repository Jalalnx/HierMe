-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Generation Time: Mar 18, 2022 at 01:19 AM
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
  `status` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `jobId` int(11) DEFAULT NULL
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
  `phone` varchar(255) DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `websiteUrl` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `institutes`
--

INSERT INTO `institutes` (`id`, `CompanyName`, `workFiled`, `location`, `adress`, `Email`, `fax`, `phone`, `logo`, `photo`, `websiteUrl`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'McDonald\'s', 'Food', NULL, 'US/AS/FR GLobaly', 'McDonald@mon.org', 'fax', ' +1 800-244-6227', 'https://res.cloudinary.com/duia5t6yl/image/upload/v1647557336/institutes/fax.png', 'https://res.cloudinary.com/duia5t6yl/image/upload/v1647557334/institutes/McDonald%40mon.org.jpg', 'McDonald.com', '$2b$08$7ssTtdLE2ZbVYJoeH0fDge1GUWbTZ.sDoSoBFP9UcEDY02BwdESdG', '2022-03-17 22:56:13', '2022-03-17 22:56:13'),
(2, 'Googleplex ', 'Food', NULL, '600 Amphitheatre Parkway in Mountain View, California.', 'org@Googleplex.com', 'fax', ' +1 800-244-6227', 'https://res.cloudinary.com/duia5t6yl/image/upload/v1647558185/institutes/fax.png', 'https://res.cloudinary.com/duia5t6yl/image/upload/v1647558184/institutes/org%40Googleplex.com.jpg', 'McDonald.com', '$2b$08$vJR/smoejVNM2OtrMznbGu52KQ.PfwbfxAr.vIjB.NuoYuOONicdy', '2022-03-17 23:03:04', '2022-03-17 23:03:04'),
(3, 'Amazon Delivery&Logistics ', 'Services', NULL, 'California.', 'org@Amazon.com', 'Not provided', ' +1 800-244-6227', 'https://res.cloudinary.com/duia5t6yl/image/upload/v1647558749/institutes/Not%20provided.png', 'https://res.cloudinary.com/duia5t6yl/image/upload/v1647558748/institutes/org%40Amazon.com.jpg', 'Amazon.in', '$2b$08$cjwrz4jrJQzW9DMzOgvj1OKujHoD3rVR/UVVOKNgpaZ1lR21UJws2', '2022-03-17 23:12:28', '2022-03-17 23:12:28');

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` int(11) NOT NULL,
  `job_role` varchar(255) DEFAULT NULL,
  `salary_range` varchar(255) DEFAULT NULL,
  `years_of_experience` varchar(255) DEFAULT NULL,
  `vacancies` varchar(255) DEFAULT NULL,
  `Employment_status` varchar(255) DEFAULT NULL,
  `employment_type` varchar(255) DEFAULT NULL,
  `education_level` varchar(255) DEFAULT NULL,
  `career_level` varchar(255) DEFAULT NULL,
  `Gender` varchar(255) DEFAULT NULL,
  `industry` varchar(255) DEFAULT NULL,
  `contry` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `joo_description` varchar(255) DEFAULT NULL,
  `max_years_of_experience` int(11) DEFAULT NULL,
  `dead_line` datetime DEFAULT NULL,
  `requirements` text DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `views` int(11) DEFAULT NULL,
  `AprovedByAdmin` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `instituteId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `jobs`
--

INSERT INTO `jobs` (`id`, `job_role`, `salary_range`, `years_of_experience`, `vacancies`, `Employment_status`, `employment_type`, `education_level`, `career_level`, `Gender`, `industry`, `contry`, `city`, `joo_description`, `max_years_of_experience`, `dead_line`, `requirements`, `status`, `views`, `AprovedByAdmin`, `createdAt`, `updatedAt`, `instituteId`) VALUES
(1, 'مطور تطبيقات اندرويت', '12,0000 _ 32,2789', '2', '5', 'دوام كامل', 'تدريب', 'مستوي جامعي', 'مبتدئ', 'غير محدد', 'تطبيقات وبرمجيات', 'الخرطوم-السودان', 'الخرطوم', 'نحن نبحث عن مطور Android مسؤول عن تطوير وصيانة التطبيقات التي تستهدف عددًا كبيرًا من أجهزة Android المتنوعة. سيكون تركيزك الأساسي على تطوير تطبيقات Android ودمجها مع الخدمات الخلفية. ستعمل جنبًا إلى جنب مع مهندسين ومطورين آخرين يعملون على طبقات مختلفة من ', 0, '2022-03-18 00:12:47', 'نماذج عمل عند المعاينه \r\nشهادة جامعيه \\خبره', 0, 5, 1, '2022-03-18 00:12:47', '2022-03-18 00:12:47', 2),
(2, 'مدير تنفيذي', NULL, '4', '1', 'دوام كامل', 'متعاقد', 'ماستر', 'خبير', NULL, NULL, 'الخرطوم', 'الخرطو\\بحري', NULL, 5, '2022-03-31 18:12:47', NULL, 0, 23032, 1, '2022-03-18 00:12:47', '2022-03-18 00:12:47', 3),
(3, 'مطور مواقع ', 'بعد المعاينه', '2', '2', 'دوام كامل', 'عن بعد', 'مستوي جامعي', 'متوسط', 'غير محدد', 'تطبيقات وبرمجيات', 'الخرطوم-السودان', 'الخرطوم', 'نحن نبحث عن مطور Android ية الجودة أمرًا ضروريًا.\r\nالمسؤوليات\r\nترجمة التصميمات والإطارات السلكية إلى كود عالي الجودة\r\nتصميم وبناء وصيانة كود Java عالي الأداء وقابل لإعادة الاستخدام وموثوق\r\nضمان أفضل أداء وجودة واستجابة ممكنة للتطبيق\r\nتحديد وتصحيح الاختناق', 0, '2022-03-18 00:12:47', 'نماذج عمل عند المعاينه \r\nشهادة جامعيه \\خبره', 0, 8908, 1, '2022-03-18 00:12:47', '2022-03-18 00:12:47', 2),
(4, 'رئيس طباخين', NULL, '1', '1', 'دوام كامل', 'موظف', NULL, NULL, 'ذكر', 'المأكولات', 'الخرطوم', 'خرطومظامدلرمان\\الواحه', NULL, 6, '2022-03-31 18:12:47', NULL, 0, 23032, 1, '2022-03-18 00:12:47', '2022-03-18 00:12:47', 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `f_name` varchar(255) DEFAULT NULL,
  `l_name` varchar(255) DEFAULT NULL,
  `phone` int(11) DEFAULT NULL,
  `Email` varchar(255) DEFAULT NULL,
  `adress` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `education_level` varchar(255) DEFAULT NULL,
  `profession` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `OPT` int(11) DEFAULT NULL,
  `Email_Verfit` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `f_name`, `l_name`, `phone`, `Email`, `adress`, `gender`, `photo`, `education_level`, `profession`, `password`, `OPT`, `Email_Verfit`, `createdAt`, `updatedAt`) VALUES
(1, 'jalal', 'daroat', 910000843, 'daroat9@gmail.com', 'karthom/sudan', 'ذكر*', 'https://res.cloudinary.com/duia5t6yl/image/upload/v1647460438/user/daroat9%40gmail.com.jpg', 'بكلارويس', 'عازف', '$2b$08$BQFl5ZwlDfPKZ07Zarw71OIncAYuxTIeMd9j4ijOjLqmZVoWaDITG', -927, 0, '2022-03-16 19:53:58', '2022-03-16 19:53:58'),
(2, 'jalal', 'daroat', 910000843, 'daroat9@gmail.com', 'karthom/sudan', 'ذكر*', 'https://res.cloudinary.com/duia5t6yl/image/upload/v1647460438/user/daroat9%40gmail.com.jpg', 'بكلارويس', 'عازف', '$2b$08$K6t4B1hdDzEVgjgg9reEneWCNM/kjvuaTJkcqiBtqVSPXGX1gytgG', 2079, 0, '2022-03-16 19:54:38', '2022-03-16 19:54:38'),
(3, 'abd Alrhaeem ', 'erhbenjk4lrwe', 2147483647, 'AJKHjks@j.com', 'eiour0894', 'male', 'https://res.cloudinary.com/duia5t6yl/image/upload/v1647460602/user/AJKHjks%40j.com.webp', 'Bs', 'سباك', '$2b$08$zqTP8okPqMAbwLnKvAxit.cy/34z0PoDt2tSuYX3zVi.U9oU2GCcK', 7352, 0, '2022-03-16 19:56:40', '2022-03-16 19:56:40'),
(4, 'abd Alrhaeem ', 'erhbenjk4lrwe', 2147483647, 'AJKHjks@j.com', 'eiour0894', 'male', 'https://res.cloudinary.com/duia5t6yl/image/upload/v1647460602/user/AJKHjks%40j.com.webp', 'Bs', 'سباك', '$2b$08$O/zGkJdxW7tZqJ08TVh2QOdZ9UDwhskNL80hDnpDFr96iGgVjDSHK', 6362, 0, '2022-03-16 23:17:17', '2022-03-16 23:17:17'),
(5, NULL, NULL, NULL, 'McDonald@mon.org', 'US/AS/FR GLobaly', NULL, 'https://res.cloudinary.com/duia5t6yl/image/upload/v1647557247/user/McDonald%40mon.org.jpg', NULL, NULL, '$2b$08$Eol/OxrullMLWrEKGfylq.QLe8l5ZcntcIP2NpWxLaRUljLFR3Rvy', NULL, NULL, '2022-03-17 22:47:28', '2022-03-17 22:47:28');

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
  ADD KEY `userId` (`userId`),
  ADD KEY `jobId` (`jobId`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

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
  ADD CONSTRAINT `employmentapplications_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `employmentapplications_ibfk_2` FOREIGN KEY (`jobId`) REFERENCES `jobs` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `jobs`
--
ALTER TABLE `jobs`
  ADD CONSTRAINT `jobs_ibfk_1` FOREIGN KEY (`instituteId`) REFERENCES `institutes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
