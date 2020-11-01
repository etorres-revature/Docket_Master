-- MySQL dump 10.13  Distrib 8.0.21, for macos10.15 (x86_64)
--
-- Host: 127.0.0.1    Database: docket_master_db
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Cases`
--

DROP TABLE IF EXISTS `Cases`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Cases` (
  `id` int NOT NULL AUTO_INCREMENT,
  `caseNumber` varchar(255) NOT NULL,
  `caption` varchar(255) DEFAULT NULL,
  `amntCntrvsy` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `DivisionId` int DEFAULT NULL,
  `PlaintiffId` int DEFAULT NULL,
  `DefendantId` int DEFAULT NULL,
  `DefenseAttorneyId` int DEFAULT NULL,
  `PlaintiffAttorneyId` int DEFAULT NULL,
  `TypeId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `DivisionId` (`DivisionId`),
  KEY `PlaintiffId` (`PlaintiffId`),
  KEY `DefendantId` (`DefendantId`),
  KEY `DefenseAttorneyId` (`DefenseAttorneyId`),
  KEY `PlaintiffAttorneyId` (`PlaintiffAttorneyId`),
  KEY `TypeId` (`TypeId`),
  CONSTRAINT `cases_ibfk_1` FOREIGN KEY (`DivisionId`) REFERENCES `Divisions` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `cases_ibfk_2` FOREIGN KEY (`PlaintiffId`) REFERENCES `Plaintiffs` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `cases_ibfk_3` FOREIGN KEY (`DefendantId`) REFERENCES `Defendants` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `cases_ibfk_4` FOREIGN KEY (`DefenseAttorneyId`) REFERENCES `DefenseAttorneys` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `cases_ibfk_5` FOREIGN KEY (`PlaintiffAttorneyId`) REFERENCES `PlaintiffAttorneys` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `cases_ibfk_6` FOREIGN KEY (`TypeId`) REFERENCES `Types` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Cases`
--

LOCK TABLES `Cases` WRITE;
/*!40000 ALTER TABLE `Cases` DISABLE KEYS */;
INSERT INTO `Cases` VALUES (1,'1NRBpyiSpby2fynYY73z9ecwu9qVk','xxxx vs xxxx',81759,'2020-10-31 17:13:17','2020-10-31 17:13:17',2,1,1,1,1,3),(2,'1aB5tgRQvyRzVdruKNMEnc912u','xxxx vs xxxx',44484,'2020-10-31 17:13:17','2020-10-31 17:13:17',1,2,2,2,2,3),(3,'3NQ8Gj9shgigwj9ddBU3uurmyofWLREpuD','xxxx vs xxxx',6292,'2020-10-31 17:13:17','2020-10-31 17:13:17',1,3,3,3,3,2),(4,'11aBK2QURoKeDMuNBuQb4G9XWGyphMs2','xxxx vs xxxx',45664,'2020-10-31 17:13:17','2020-10-31 17:13:17',1,4,4,4,4,1),(5,'3ExUykwG2Tfh22h87kWMEuhPaLHqCFoCd9','xxxx vs xxxx',50206,'2020-10-31 17:13:17','2020-10-31 17:13:17',2,5,5,5,5,1),(6,'1HMBEyt7irzL4gkXQ2ydHNKcJcdTsBVXbF','xxxx vs xxxx',29619,'2020-10-31 17:13:17','2020-10-31 17:13:17',2,6,6,6,6,1),(7,'3ZrWUeNv5hcRo6j3GhLgvD8Yi4pisuDPex','xxxx vs xxxx',42688,'2020-10-31 17:13:17','2020-10-31 17:13:17',2,7,7,7,7,1),(8,'1zR8nLsBWMzKT68J8BjNyfqsxjbV7tQp','xxxx vs xxxx',90781,'2020-10-31 17:13:17','2020-10-31 17:13:17',2,8,8,8,8,2),(9,'345R9RfM24psDMBnNpX3W5Ej36RJ','xxxx vs xxxx',68796,'2020-10-31 17:13:17','2020-10-31 17:13:17',2,9,9,9,9,3),(10,'1NwyckLm5GoQVjxJhh98QSro36m9yqif','xxxx vs xxxx',18056,'2020-10-31 17:13:17','2020-10-31 17:13:17',2,10,10,10,10,1),(11,'1aRuuqPd9U8mxmrPB8HuB4jTZgC528k','xxxx vs xxxx',98398,'2020-10-31 17:13:17','2020-10-31 17:13:17',1,11,11,11,11,3),(12,'3FWBmk5TxmEAg6dxAsBA44jKFwSJ5','xxxx vs xxxx',7143,'2020-10-31 17:13:17','2020-10-31 17:13:17',1,12,12,12,12,1),(13,'1U3NBBiMyXsH4TowCuGLXxAXGG2A2hkcS','xxxx vs xxxx',64988,'2020-10-31 17:13:17','2020-10-31 17:13:17',2,13,13,13,13,1),(14,'1HSWBYUK8WgtAG2KwCyJUt6ZwSBN','xxxx vs xxxx',74272,'2020-10-31 17:13:17','2020-10-31 17:13:17',1,14,14,14,14,3),(15,'1qgoUuw1PVP19ADV89SXAhC53r','xxxx vs xxxx',1579,'2020-10-31 17:13:17','2020-10-31 17:13:17',1,15,15,15,15,1),(16,'34noic36wtobBUuGzu4JJyuU1pvSTdBtbq','xxxx vs xxxx',57462,'2020-10-31 17:13:17','2020-10-31 17:13:17',1,16,16,16,16,2),(17,'1rPbZbYapq4G7LvAtLCs5nQixMmQj','xxxx vs xxxx',66754,'2020-10-31 17:13:17','2020-10-31 17:13:17',2,17,17,17,17,1),(18,'3mV5RZz6dzbPGhry4A61Ykm7dTJ','xxxx vs xxxx',50537,'2020-10-31 17:13:17','2020-10-31 17:13:17',1,18,18,18,18,2),(19,'11srPzLFogTRRiya8YB5GJXV9M','xxxx vs xxxx',50843,'2020-10-31 17:13:17','2020-10-31 17:13:17',1,19,19,19,19,1),(20,'1HTAdVQ7EjVNgxnnywRzEhBqWi','xxxx vs xxxx',9549,'2020-10-31 17:13:17','2020-10-31 17:13:17',2,20,20,20,20,2),(21,'1225V1TqHScZvbqihqH4TNQtQ7p','xxxx vs xxxx',23417,'2020-10-31 17:13:17','2020-10-31 17:13:17',2,21,21,21,21,3),(22,'1ve1Q4vnWL7znhh836dAEkVPQ','xxxx vs xxxx',99471,'2020-10-31 17:13:17','2020-10-31 17:13:17',1,22,22,22,22,1),(23,'3CtC6xsJ4dvskgNq6QFvDeNP4SW','xxxx vs xxxx',77690,'2020-10-31 17:13:17','2020-10-31 17:13:17',2,23,23,23,23,2),(24,'1efR5L4xQaVz19zbQJRXvRDbtQaSsPk8J1','xxxx vs xxxx',29710,'2020-10-31 17:13:17','2020-10-31 17:13:17',1,24,24,24,24,2),(25,'1ikoG9cs4ftzEtCEWvv8KXswuc8yhwdGp','xxxx vs xxxx',12603,'2020-10-31 17:13:17','2020-10-31 17:13:17',2,25,25,25,25,3),(26,'3PEtg8u2XFaivTAH5HZawyomJNL3v','xxxx vs xxxx',2999,'2020-10-31 17:13:17','2020-10-31 17:13:17',1,26,26,26,26,3),(27,'1tBpZ6LTyBEMcZukZyRezWNVvd','xxxx vs xxxx',52497,'2020-10-31 17:13:17','2020-10-31 17:13:17',1,27,27,27,27,1),(28,'3aZKCLfZpdfb8jMbFyt3bgN72gtgjBs9','xxxx vs xxxx',84360,'2020-10-31 17:13:17','2020-10-31 17:13:17',1,28,28,28,28,2),(29,'3ST1DC855huAP1R9eRaYTcRnNvXJ','xxxx vs xxxx',42169,'2020-10-31 17:13:17','2020-10-31 17:13:17',2,29,29,29,29,1),(30,'3CpwiXVzECaezvSatKF8vwdvcfvebYCRVj','xxxx vs xxxx',98682,'2020-10-31 17:13:17','2020-10-31 17:13:17',1,30,30,30,30,3),(31,'3gsCdYByWrStYyAMfPUDGHeKNJs4tXhs7','xxxx vs xxxx',75929,'2020-10-31 17:13:17','2020-10-31 17:13:17',1,31,31,31,31,1),(32,'3utFtJd6yUYv4Q2TYMVQTbpTo2U','xxxx vs xxxx',19510,'2020-10-31 17:13:17','2020-10-31 17:13:17',2,32,32,32,32,2),(33,'3NBBoc8uUA9xJ39kAoM1zKfLRrci4aSW6t','xxxx vs xxxx',95205,'2020-10-31 17:13:17','2020-10-31 17:13:17',2,33,33,33,33,1),(34,'3iMDWB9DHzgBJgzfpSuankPHX2G9cKP','xxxx vs xxxx',89215,'2020-10-31 17:13:17','2020-10-31 17:13:17',1,34,34,34,34,1),(35,'1PuQAtWAdYNUF9FCuGNBgpV1mhJE','xxxx vs xxxx',37678,'2020-10-31 17:13:17','2020-10-31 17:13:17',1,35,35,35,35,1),(36,'1ya7iHZJsZAjpM4qTyF7sp7sM1P9d5P','xxxx vs xxxx',51493,'2020-10-31 17:13:17','2020-10-31 17:13:17',1,36,36,36,36,3),(37,'1cCF9b8nXNxBSbXhpPNYa1p9PCcfkyC','xxxx vs xxxx',14395,'2020-10-31 17:13:17','2020-10-31 17:13:17',1,37,37,37,37,3),(38,'1MxuZ4kx1eVvppZzotNGSmnyU6yYcwc','xxxx vs xxxx',35573,'2020-10-31 17:13:17','2020-10-31 17:13:17',1,38,38,38,38,2),(39,'1fPL74rBdCQwsyHXxDYbRankGgPm','xxxx vs xxxx',43575,'2020-10-31 17:13:17','2020-10-31 17:13:17',2,39,39,39,39,2),(40,'3MqNwTF5hKR9T93AqwDV1AnChRedoYNyik','xxxx vs xxxx',25531,'2020-10-31 17:13:17','2020-10-31 17:13:17',1,40,40,40,40,3),(41,'39nQastnTteUMRAtwK7FeqkNsh','xxxx vs xxxx',70082,'2020-10-31 17:13:17','2020-10-31 17:13:17',1,41,41,41,41,3),(42,'1pDa3BzgNY9SjPpmXxqcQ8joh','xxxx vs xxxx',6282,'2020-10-31 17:13:17','2020-10-31 17:13:17',1,42,42,42,42,1),(43,'3TqBwScC6AswMCuG4JFWt7ubqb4uhLAum','xxxx vs xxxx',72390,'2020-10-31 17:13:17','2020-10-31 17:13:17',2,43,43,43,43,1),(44,'3Ez6ftwp8GmELtxmeBVDn5CaqHkA','xxxx vs xxxx',61903,'2020-10-31 17:13:17','2020-10-31 17:13:17',2,44,44,44,44,2),(45,'3DhYsRfSALXQTd6PnShWMonhZ','xxxx vs xxxx',83447,'2020-10-31 17:13:17','2020-10-31 17:13:17',1,45,45,45,45,3),(46,'1uRTLFpMeaaqWRDzSMYD82dx1CrDL1T4','xxxx vs xxxx',95805,'2020-10-31 17:13:17','2020-10-31 17:13:17',2,46,46,46,46,2),(47,'13M96kVy1JdNpeGye4X28peGrB2w5pEV','xxxx vs xxxx',21396,'2020-10-31 17:13:17','2020-10-31 17:13:17',2,47,47,47,47,2),(48,'3xzMtPznRbyQJDp5YvTC9kCXDFaQitoi','xxxx vs xxxx',73713,'2020-10-31 17:13:17','2020-10-31 17:13:17',1,48,48,48,48,1),(49,'1Ct7VsM5wopM1bpGXY6NB2gPpB','xxxx vs xxxx',97894,'2020-10-31 17:13:17','2020-10-31 17:13:17',2,49,49,49,49,3),(50,'1QdfvCgbKVgdmCexKpnPLxbayXZP','xxxx vs xxxx',77426,'2020-10-31 17:13:17','2020-10-31 17:13:17',2,50,50,50,50,1),(51,'1N65nPfhKNrmng3U7ZgrVmeEPqYUqTCh','xxxx vs xxxx',85722,'2020-10-31 17:13:17','2020-10-31 17:13:17',2,51,51,51,51,1),(52,'1JA3wSWqyNeff3joowL6T2nT64VDdxf','xxxx vs xxxx',9126,'2020-10-31 17:13:17','2020-10-31 17:13:17',1,52,52,52,52,2),(53,'32cf3FFJNiWLCnZ68bLFyxPWUu1h','xxxx vs xxxx',4950,'2020-10-31 17:13:17','2020-10-31 17:13:17',1,53,53,53,53,1),(54,'31ta68v5FUWnH4pV8gqAkSeAAUdVNH','xxxx vs xxxx',9599,'2020-10-31 17:13:17','2020-10-31 17:13:17',1,54,54,54,54,3),(55,'3LEhxZkpsWbytZTDUTbx9UU1VTX','xxxx vs xxxx',7801,'2020-10-31 17:13:17','2020-10-31 17:13:17',1,55,55,55,55,3),(56,'3UFyb3zjdnkuyAhuEYw2dL9zqMAL','xxxx vs xxxx',6818,'2020-10-31 17:13:17','2020-10-31 17:13:17',1,56,56,56,56,3),(57,'1GRb4t1oevBN11WWcGGQE88ZMFNQ6cURvF','xxxx vs xxxx',46074,'2020-10-31 17:13:17','2020-10-31 17:13:17',2,57,57,57,57,3),(58,'3ucDCAimbwmjY9zLG5QtXLyBkgQJrGf8','xxxx vs xxxx',94265,'2020-10-31 17:13:17','2020-10-31 17:13:17',2,58,58,58,58,3),(59,'1Q55y4BjqLAYXL6FyS33di9wq7MXoQQ','xxxx vs xxxx',68086,'2020-10-31 17:13:17','2020-10-31 17:13:17',1,59,59,59,59,3),(60,'3tkuBzpiVA2jbg59RXwYSMfJAEFW','xxxx vs xxxx',5586,'2020-10-31 17:13:17','2020-10-31 17:13:17',2,60,60,60,60,2),(61,'3LRMFSMjSwnPCt2kZC1V6wLPVY','xxxx vs xxxx',20587,'2020-10-31 17:13:17','2020-10-31 17:13:17',2,61,61,61,61,3),(62,'1PYsanDLFppMqdBzSk7aQtXiGBVHsp','xxxx vs xxxx',72311,'2020-10-31 17:13:17','2020-10-31 17:13:17',2,62,62,62,62,3),(63,'3tNtmJizuEByq1UTBgrU6QK8ccJn','xxxx vs xxxx',9217,'2020-10-31 17:13:17','2020-10-31 17:13:17',1,63,63,63,63,3),(64,'1Fhv8PZF6MsAcurqjbZ6vBQUEyzWU1Dwzr','xxxx vs xxxx',71517,'2020-10-31 17:13:17','2020-10-31 17:13:17',1,64,64,64,64,3),(65,'3WMLYALR9hcj3r7YWr3gNu1vmW','xxxx vs xxxx',96358,'2020-10-31 17:13:17','2020-10-31 17:13:17',1,65,65,65,65,3),(66,'3G5Tywik3EdQZWZ1i7v2BDBK5vdd','xxxx vs xxxx',59613,'2020-10-31 17:13:17','2020-10-31 17:13:17',1,66,66,66,66,3),(67,'3ytV2EQt2a9qnMUsuNUkeczrJESx','xxxx vs xxxx',56869,'2020-10-31 17:13:17','2020-10-31 17:13:17',1,67,67,67,67,3),(68,'1XoQviLrwudrXamarFx769UkkYDWavkv','xxxx vs xxxx',70994,'2020-10-31 17:13:17','2020-10-31 17:13:17',1,68,68,68,68,1),(69,'1ekndDPDgv4MqK3rGXdQ5L6RT','xxxx vs xxxx',57521,'2020-10-31 17:13:17','2020-10-31 17:13:17',2,69,69,69,69,2),(70,'14SmkSnxo7huUqKNqmkWpcz66','xxxx vs xxxx',31625,'2020-10-31 17:13:17','2020-10-31 17:13:17',1,70,70,70,70,1),(71,'1hwKhBC3DudYbitP8aJB1NAbMqbzuPe','xxxx vs xxxx',83756,'2020-10-31 17:13:17','2020-10-31 17:13:17',1,71,71,71,71,1),(72,'3J1kyviSJ734Eq1jGiyF49jvn3sn4bsf','xxxx vs xxxx',24603,'2020-10-31 17:13:17','2020-10-31 17:13:17',2,72,72,72,72,2),(73,'1EkL33qjrYoqwtoFxMSL33LQ4jJ6rU3jE3','xxxx vs xxxx',95378,'2020-10-31 17:13:17','2020-10-31 17:13:17',1,73,73,73,73,1),(74,'3uidZ3yDPTtuD25x7EKva1KMq','xxxx vs xxxx',64632,'2020-10-31 17:13:17','2020-10-31 17:13:17',2,74,74,74,74,2),(75,'1QS86oUi1rbNHb6cNSZwudyTyLcqkddC2','xxxx vs xxxx',52142,'2020-10-31 17:13:17','2020-10-31 17:13:17',1,75,75,75,75,3),(76,'3HRWGLwEe5LpysEEbHEDwxhvVx2xNnH','xxxx vs xxxx',38795,'2020-10-31 17:13:17','2020-10-31 17:13:17',1,76,76,76,76,1),(77,'1V9smjLNycVebCBo7SXusShD5FMWh','xxxx vs xxxx',88918,'2020-10-31 17:13:17','2020-10-31 17:13:17',1,77,77,77,77,3),(78,'3CtyuykXRb4wniBsNqVpoPyshD','xxxx vs xxxx',78185,'2020-10-31 17:13:17','2020-10-31 17:13:17',1,78,78,78,78,3),(79,'3uN89eceAjeDBVpjYv6sHP7NBpR69e6pE','xxxx vs xxxx',65696,'2020-10-31 17:13:17','2020-10-31 17:13:17',2,79,79,79,79,3),(80,'1rwtPNn7MLSYLF8vki9oubpmexFr','xxxx vs xxxx',68410,'2020-10-31 17:13:17','2020-10-31 17:13:17',2,80,80,80,80,3),(81,'1JF3Bwzs1qX5otjr4yL9ebigxn','xxxx vs xxxx',90797,'2020-10-31 17:13:17','2020-10-31 17:13:17',1,81,81,81,81,3),(82,'3EPLdgjYN8p7z4unu3exwGeQwPusu2','xxxx vs xxxx',6702,'2020-10-31 17:13:17','2020-10-31 17:13:17',1,82,82,82,82,1),(83,'34R8UFW4ejEhEv7uyWNR9ANBXi','xxxx vs xxxx',8686,'2020-10-31 17:13:17','2020-10-31 17:13:17',1,83,83,83,83,1),(84,'1C5z84Xi6baMuiC1XT9sKzFGPmGWHinnWW','xxxx vs xxxx',42739,'2020-10-31 17:13:17','2020-10-31 17:13:17',1,84,84,84,84,2),(85,'3RZa8pUZ5Y5q9PXj6oGTfb7wMPcEypCo','xxxx vs xxxx',40721,'2020-10-31 17:13:17','2020-10-31 17:13:17',2,85,85,85,85,2),(86,'1nyPUuWmNtJKLDPQKC2cxwSFgo5C9TnEz','xxxx vs xxxx',8825,'2020-10-31 17:13:17','2020-10-31 17:13:17',2,86,86,86,86,3),(87,'1bdFzk5bpAycAUCXgPwpeyQy14Jvoca','xxxx vs xxxx',69978,'2020-10-31 17:13:17','2020-10-31 17:13:17',2,87,87,87,87,1),(88,'31qZXPQQVLvpzQzVk2HrGq5gY','xxxx vs xxxx',13493,'2020-10-31 17:13:17','2020-10-31 17:13:17',1,88,88,88,88,2),(89,'19jKz8cufbuhJpGJzWra1bJhHmrYQ','xxxx vs xxxx',81962,'2020-10-31 17:13:17','2020-10-31 17:13:17',2,89,89,89,89,1),(90,'3zT3khBGPmLbzn5gNabrXQpNP8npn7K','xxxx vs xxxx',98221,'2020-10-31 17:13:17','2020-10-31 17:13:17',2,90,90,90,90,3),(91,'1MHSTRrDfMs3jJ87s6MSLWYMHo','xxxx vs xxxx',69319,'2020-10-31 17:13:17','2020-10-31 17:13:17',1,91,91,91,91,1),(92,'1dKaC4qBKhnw4SgeFH7TGfHL6NaS7Zxc','xxxx vs xxxx',33533,'2020-10-31 17:13:17','2020-10-31 17:13:17',2,92,92,92,92,1),(93,'3p2hvVy3BvWwtL99ErLUJYR3PkF','xxxx vs xxxx',71224,'2020-10-31 17:13:17','2020-10-31 17:13:17',2,93,93,93,93,1),(94,'3RXF5TnSE1CznKtJjEjVLN7BEjuw5','xxxx vs xxxx',22143,'2020-10-31 17:13:17','2020-10-31 17:13:17',1,94,94,94,94,1),(95,'1L4HSYAQQLuRoY6k4hMjiTrvcpnj3rYnQu','xxxx vs xxxx',95063,'2020-10-31 17:13:17','2020-10-31 17:13:17',1,95,95,95,95,2),(96,'3dXtnPit3vAcxfQ7ojKQDra5w7K','xxxx vs xxxx',1443,'2020-10-31 17:13:17','2020-10-31 17:13:17',1,96,96,96,96,2),(97,'3wgtvikb9JaWoNjgJcU2RyhCBEBTaN7RnB','xxxx vs xxxx',95043,'2020-10-31 17:13:17','2020-10-31 17:13:17',1,97,97,97,97,1),(98,'3vSmF3yc7zeHncndkr7eWw599ccH611CN','xxxx vs xxxx',98670,'2020-10-31 17:13:17','2020-10-31 17:13:17',2,98,98,98,98,2),(99,'3jSB9CzMjPhzMHNB4ey7AZ5S5s','xxxx vs xxxx',4257,'2020-10-31 17:13:17','2020-10-31 17:13:17',1,99,99,99,99,3),(100,'1A4ypCoPc3Hj9vfXudgP3BuBfwQswD8WVG','xxxx vs xxxx',44478,'2020-10-31 17:13:17','2020-10-31 17:13:17',2,100,100,100,100,2);
/*!40000 ALTER TABLE `Cases` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Defendants`
--

DROP TABLE IF EXISTS `Defendants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Defendants` (
  `id` int NOT NULL AUTO_INCREMENT,
  `FName` varchar(255) NOT NULL,
  `LName` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Defendants`
--

LOCK TABLES `Defendants` WRITE;
/*!40000 ALTER TABLE `Defendants` DISABLE KEYS */;
INSERT INTO `Defendants` VALUES (1,'Burley','Shanahan','2020-10-31 17:13:17','2020-10-31 17:13:17'),(2,'Martine','Braun','2020-10-31 17:13:17','2020-10-31 17:13:17'),(3,'Shannon','Dooley','2020-10-31 17:13:17','2020-10-31 17:13:17'),(4,'Georgiana','Legros','2020-10-31 17:13:17','2020-10-31 17:13:17'),(5,'Montana','Huel','2020-10-31 17:13:17','2020-10-31 17:13:17'),(6,'Emiliano','Cruickshank','2020-10-31 17:13:17','2020-10-31 17:13:17'),(7,'Elta','Bosco','2020-10-31 17:13:17','2020-10-31 17:13:17'),(8,'Lily','Thiel','2020-10-31 17:13:17','2020-10-31 17:13:17'),(9,'Alec','Hodkiewicz','2020-10-31 17:13:17','2020-10-31 17:13:17'),(10,'Moses','Halvorson','2020-10-31 17:13:17','2020-10-31 17:13:17'),(11,'Isai','Morissette','2020-10-31 17:13:17','2020-10-31 17:13:17'),(12,'Reba','Medhurst','2020-10-31 17:13:17','2020-10-31 17:13:17'),(13,'Miracle','Huels','2020-10-31 17:13:17','2020-10-31 17:13:17'),(14,'Giovanny','Murphy','2020-10-31 17:13:17','2020-10-31 17:13:17'),(15,'Jayde','Balistreri','2020-10-31 17:13:17','2020-10-31 17:13:17'),(16,'Tristian','Grant','2020-10-31 17:13:17','2020-10-31 17:13:17'),(17,'Serena','Pollich','2020-10-31 17:13:17','2020-10-31 17:13:17'),(18,'Lennie','Crona','2020-10-31 17:13:17','2020-10-31 17:13:17'),(19,'Miller','Jaskolski','2020-10-31 17:13:17','2020-10-31 17:13:17'),(20,'Donald','Nicolas','2020-10-31 17:13:17','2020-10-31 17:13:17'),(21,'Vida','Stroman','2020-10-31 17:13:17','2020-10-31 17:13:17'),(22,'Edmond','Wyman','2020-10-31 17:13:17','2020-10-31 17:13:17'),(23,'Kristoffer','Grimes','2020-10-31 17:13:17','2020-10-31 17:13:17'),(24,'Ryann','Koss','2020-10-31 17:13:17','2020-10-31 17:13:17'),(25,'Zoie','Altenwerth','2020-10-31 17:13:17','2020-10-31 17:13:17'),(26,'Ronny','Klein','2020-10-31 17:13:17','2020-10-31 17:13:17'),(27,'Megane','Stamm','2020-10-31 17:13:17','2020-10-31 17:13:17'),(28,'Roxanne','Wisoky','2020-10-31 17:13:17','2020-10-31 17:13:17'),(29,'Dereck','Hartmann','2020-10-31 17:13:17','2020-10-31 17:13:17'),(30,'Joe','Waters','2020-10-31 17:13:17','2020-10-31 17:13:17'),(31,'Helen','Mraz','2020-10-31 17:13:17','2020-10-31 17:13:17'),(32,'Sincere','Jaskolski','2020-10-31 17:13:17','2020-10-31 17:13:17'),(33,'Norma','Kshlerin','2020-10-31 17:13:17','2020-10-31 17:13:17'),(34,'Mac','Schaden','2020-10-31 17:13:17','2020-10-31 17:13:17'),(35,'Calista','Kunze','2020-10-31 17:13:17','2020-10-31 17:13:17'),(36,'Colten','Steuber','2020-10-31 17:13:17','2020-10-31 17:13:17'),(37,'Arlo','O\'Kon','2020-10-31 17:13:17','2020-10-31 17:13:17'),(38,'Napoleon','Schmitt','2020-10-31 17:13:17','2020-10-31 17:13:17'),(39,'Chasity','MacGyver','2020-10-31 17:13:17','2020-10-31 17:13:17'),(40,'Cortez','Feil','2020-10-31 17:13:17','2020-10-31 17:13:17'),(41,'Hettie','Ruecker','2020-10-31 17:13:17','2020-10-31 17:13:17'),(42,'Teresa','Luettgen','2020-10-31 17:13:17','2020-10-31 17:13:17'),(43,'Caitlyn','Mertz','2020-10-31 17:13:17','2020-10-31 17:13:17'),(44,'Elfrieda','Ondricka','2020-10-31 17:13:17','2020-10-31 17:13:17'),(45,'Alva','Kautzer','2020-10-31 17:13:17','2020-10-31 17:13:17'),(46,'Keegan','Walsh','2020-10-31 17:13:17','2020-10-31 17:13:17'),(47,'Eryn','Weissnat','2020-10-31 17:13:17','2020-10-31 17:13:17'),(48,'Cyrus','Crist','2020-10-31 17:13:17','2020-10-31 17:13:17'),(49,'Bud','Trantow','2020-10-31 17:13:17','2020-10-31 17:13:17'),(50,'Hortense','Pfeffer','2020-10-31 17:13:17','2020-10-31 17:13:17'),(51,'Gennaro','Keeling','2020-10-31 17:13:17','2020-10-31 17:13:17'),(52,'Eulalia','Hane','2020-10-31 17:13:17','2020-10-31 17:13:17'),(53,'Jessyca','Kunde','2020-10-31 17:13:17','2020-10-31 17:13:17'),(54,'Manuela','Dach','2020-10-31 17:13:17','2020-10-31 17:13:17'),(55,'Karolann','Baumbach','2020-10-31 17:13:17','2020-10-31 17:13:17'),(56,'Derick','Spinka','2020-10-31 17:13:17','2020-10-31 17:13:17'),(57,'Nash','Crist','2020-10-31 17:13:17','2020-10-31 17:13:17'),(58,'Gerard','Hoeger','2020-10-31 17:13:17','2020-10-31 17:13:17'),(59,'Melyssa','Bruen','2020-10-31 17:13:17','2020-10-31 17:13:17'),(60,'Izabella','Kuphal','2020-10-31 17:13:17','2020-10-31 17:13:17'),(61,'Dante','Hansen','2020-10-31 17:13:17','2020-10-31 17:13:17'),(62,'Raul','MacGyver','2020-10-31 17:13:17','2020-10-31 17:13:17'),(63,'Leila','Gusikowski','2020-10-31 17:13:17','2020-10-31 17:13:17'),(64,'Nash','Huels','2020-10-31 17:13:17','2020-10-31 17:13:17'),(65,'Liza','Prohaska','2020-10-31 17:13:17','2020-10-31 17:13:17'),(66,'Scot','Kuhlman','2020-10-31 17:13:17','2020-10-31 17:13:17'),(67,'Mattie','Beier','2020-10-31 17:13:17','2020-10-31 17:13:17'),(68,'Daryl','Friesen','2020-10-31 17:13:17','2020-10-31 17:13:17'),(69,'Elisa','Larkin','2020-10-31 17:13:17','2020-10-31 17:13:17'),(70,'Jany','Crist','2020-10-31 17:13:17','2020-10-31 17:13:17'),(71,'Jovany','Glover','2020-10-31 17:13:17','2020-10-31 17:13:17'),(72,'Yadira','Champlin','2020-10-31 17:13:17','2020-10-31 17:13:17'),(73,'Alexzander','Harber','2020-10-31 17:13:17','2020-10-31 17:13:17'),(74,'Delaney','Willms','2020-10-31 17:13:17','2020-10-31 17:13:17'),(75,'Gaston','Murphy','2020-10-31 17:13:17','2020-10-31 17:13:17'),(76,'Zechariah','Mann','2020-10-31 17:13:17','2020-10-31 17:13:17'),(77,'Ashleigh','Carroll','2020-10-31 17:13:17','2020-10-31 17:13:17'),(78,'Gladyce','O\'Kon','2020-10-31 17:13:17','2020-10-31 17:13:17'),(79,'Beverly','Nienow','2020-10-31 17:13:17','2020-10-31 17:13:17'),(80,'Cade','Nikolaus','2020-10-31 17:13:17','2020-10-31 17:13:17'),(81,'Vance','Ledner','2020-10-31 17:13:17','2020-10-31 17:13:17'),(82,'Armand','Ryan','2020-10-31 17:13:17','2020-10-31 17:13:17'),(83,'Maddison','Lakin','2020-10-31 17:13:17','2020-10-31 17:13:17'),(84,'Maritza','Hansen','2020-10-31 17:13:17','2020-10-31 17:13:17'),(85,'Tiana','Morissette','2020-10-31 17:13:17','2020-10-31 17:13:17'),(86,'Norval','Bradtke','2020-10-31 17:13:17','2020-10-31 17:13:17'),(87,'Neva','Baumbach','2020-10-31 17:13:17','2020-10-31 17:13:17'),(88,'Alan','Lowe','2020-10-31 17:13:17','2020-10-31 17:13:17'),(89,'Mayra','Considine','2020-10-31 17:13:17','2020-10-31 17:13:17'),(90,'Mireille','Kihn','2020-10-31 17:13:17','2020-10-31 17:13:17'),(91,'Evelyn','Hartmann','2020-10-31 17:13:17','2020-10-31 17:13:17'),(92,'Ansley','Trantow','2020-10-31 17:13:17','2020-10-31 17:13:17'),(93,'Brock','Haley','2020-10-31 17:13:17','2020-10-31 17:13:17'),(94,'Jonas','Champlin','2020-10-31 17:13:17','2020-10-31 17:13:17'),(95,'Henriette','Bahringer','2020-10-31 17:13:17','2020-10-31 17:13:17'),(96,'Icie','Lockman','2020-10-31 17:13:17','2020-10-31 17:13:17'),(97,'Shaniya','Breitenberg','2020-10-31 17:13:17','2020-10-31 17:13:17'),(98,'Tanya','Ortiz','2020-10-31 17:13:17','2020-10-31 17:13:17'),(99,'Neva','Schulist','2020-10-31 17:13:17','2020-10-31 17:13:17'),(100,'Mikayla','Wiegand','2020-10-31 17:13:17','2020-10-31 17:13:17');
/*!40000 ALTER TABLE `Defendants` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `DefenseAttorneys`
--

DROP TABLE IF EXISTS `DefenseAttorneys`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `DefenseAttorneys` (
  `id` int NOT NULL AUTO_INCREMENT,
  `def_attorneyFName` varchar(255) NOT NULL,
  `def_attorneyLName` varchar(255) NOT NULL,
  `barNumber` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `DefenseAttorneys`
--

LOCK TABLES `DefenseAttorneys` WRITE;
/*!40000 ALTER TABLE `DefenseAttorneys` DISABLE KEYS */;
INSERT INTO `DefenseAttorneys` VALUES (1,'Jerel','Grant',65121,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(2,'Julian','Homenick',34483,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(3,'Brigitte','Homenick',45051,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(4,'Erica','Mills',50260,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(5,'Mavis','Gutkowski',17073,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(6,'Marlon','Feest',53022,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(7,'Jalon','Krajcik',41499,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(8,'Lelah','Greenfelder',31201,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(9,'Arvilla','Schowalter',21291,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(10,'Max','Beier',1069,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(11,'Nat','Greenholt',14435,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(12,'Elenor','Gerlach',11062,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(13,'Gerson','Tillman',38740,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(14,'Alexa','Ledner',66648,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(15,'Cecile','Windler',23360,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(16,'Georgianna','Metz',64368,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(17,'Raul','Schaefer',25880,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(18,'Mariah','Frami',42476,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(19,'Jaunita','Murray',39609,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(20,'Daniela','Jacobi',92769,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(21,'Jalen','Jast',56538,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(22,'Kitty','Schowalter',87063,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(23,'Nicholas','Krajcik',6223,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(24,'Eunice','Lindgren',6459,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(25,'Taylor','Sipes',48881,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(26,'Kamille','Altenwerth',65695,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(27,'Geraldine','Johnson',51673,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(28,'Katarina','Larkin',17605,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(29,'Hillary','Beatty',385,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(30,'Emery','Hermiston',23763,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(31,'Christine','Kreiger',87520,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(32,'Devonte','Huels',25308,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(33,'Garrison','Herman',42250,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(34,'Guy','Tillman',57325,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(35,'Clara','Spencer',92278,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(36,'Brando','Lockman',56298,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(37,'Darron','Stroman',494,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(38,'Thad','Hegmann',29095,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(39,'Edward','Gislason',59660,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(40,'Chaim','Adams',20152,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(41,'Agnes','Jast',88607,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(42,'Marianne','McClure',21196,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(43,'Royce','Russel',98677,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(44,'Tierra','Lesch',64386,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(45,'Eleanora','Johnston',51302,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(46,'Lafayette','Frami',37135,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(47,'Lucio','Ritchie',36602,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(48,'Holly','Batz',76855,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(49,'Charlene','Balistreri',56425,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(50,'Deanna','Muller',26792,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(51,'Mabelle','Hilll',7123,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(52,'Perry','Casper',52584,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(53,'Mason','Skiles',42200,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(54,'Isabella','Muller',50023,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(55,'Amir','Cormier',5011,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(56,'Liliane','Zieme',50710,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(57,'Aidan','Quitzon',76507,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(58,'Telly','Flatley',10956,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(59,'Emmy','McGlynn',56296,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(60,'Willa','Konopelski',7027,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(61,'Alberto','Williamson',60736,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(62,'Jadyn','Connelly',20804,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(63,'Heath','Bradtke',67018,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(64,'Marcelo','Mayert',78853,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(65,'Zackery','Towne',56870,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(66,'Ella','Windler',87203,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(67,'Danny','Reinger',53582,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(68,'Rashawn','Herzog',21373,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(69,'Viviane','Cummerata',99659,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(70,'Demetris','Welch',83892,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(71,'Nia','Thiel',47482,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(72,'Mallie','Satterfield',18255,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(73,'Eli','Will',29122,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(74,'Oswaldo','Langosh',95178,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(75,'Nyasia','Buckridge',42006,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(76,'Abdul','Glover',95598,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(77,'Ophelia','Schultz',20318,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(78,'Merritt','O\'Hara',53072,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(79,'Carroll','Hirthe',18619,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(80,'Claire','Wilderman',79395,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(81,'Lura','Predovic',24963,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(82,'Josiane','Beahan',86815,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(83,'Devyn','O\'Conner',24423,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(84,'Osvaldo','Kuhlman',19066,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(85,'Ottilie','Halvorson',28184,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(86,'Jeanie','Stehr',13340,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(87,'Christopher','Turcotte',81588,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(88,'Donnie','Reynolds',20346,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(89,'Keanu','Kautzer',51147,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(90,'Efrain','Huels',79144,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(91,'Dina','Toy',47614,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(92,'Beth','Fritsch',38950,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(93,'Jordane','Dicki',69171,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(94,'Ida','Kovacek',98899,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(95,'Margie','Marvin',30842,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(96,'Alayna','Haley',23908,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(97,'Elinore','Miller',54549,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(98,'Sierra','Kassulke',56886,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(99,'Madison','Schmitt',70763,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(100,'Nakia','Kuhn',48795,'2020-10-31 17:13:17','2020-10-31 17:13:17');
/*!40000 ALTER TABLE `DefenseAttorneys` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Divisions`
--

DROP TABLE IF EXISTS `Divisions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Divisions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `division` varchar(255) NOT NULL,
  `judgeFName` varchar(255) NOT NULL,
  `judgeLName` varchar(255) NOT NULL,
  `roomNumber` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Divisions`
--

LOCK TABLES `Divisions` WRITE;
/*!40000 ALTER TABLE `Divisions` DISABLE KEYS */;
INSERT INTO `Divisions` VALUES (1,'353rd District Court','John','Doe',500,'2020-10-31 17:13:16','2020-10-31 17:13:16'),(2,'134th District Court','Jane','Doe',500,'2020-10-31 17:13:16','2020-10-31 17:13:16');
/*!40000 ALTER TABLE `Divisions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `PlaintiffAttorneys`
--

DROP TABLE IF EXISTS `PlaintiffAttorneys`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `PlaintiffAttorneys` (
  `id` int NOT NULL AUTO_INCREMENT,
  `FName` varchar(255) NOT NULL,
  `LName` varchar(255) NOT NULL,
  `barNumber` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `PlaintiffAttorneys`
--

LOCK TABLES `PlaintiffAttorneys` WRITE;
/*!40000 ALTER TABLE `PlaintiffAttorneys` DISABLE KEYS */;
INSERT INTO `PlaintiffAttorneys` VALUES (1,'Leanne','Hoppe',12486,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(2,'Sebastian','Jakubowski',58502,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(3,'Josh','Upton',4230,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(4,'Shayne','Hettinger',83597,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(5,'Bertram','Rogahn',74393,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(6,'Brannon','Smitham',92329,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(7,'Serenity','Ratke',4957,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(8,'Liza','Sporer',49423,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(9,'Floyd','Erdman',4885,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(10,'Maximus','Simonis',60473,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(11,'Clifton','O\'Keefe',44260,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(12,'Macey','Schuppe',35582,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(13,'Angelica','Predovic',25256,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(14,'Joanny','Ziemann',90471,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(15,'Nedra','Sporer',55544,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(16,'Kattie','Hegmann',458,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(17,'Odessa','Brown',26120,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(18,'Taryn','Doyle',77589,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(19,'Camilla','O\'Reilly',82217,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(20,'Brennan','Runolfsson',3279,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(21,'Van','Lemke',64088,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(22,'Francesca','Hettinger',858,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(23,'Jazmyn','Kiehn',32613,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(24,'Andreanne','Schuster',32632,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(25,'Nella','Leffler',25988,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(26,'Duane','Bernier',90926,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(27,'Maurine','Schmeler',36710,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(28,'Joannie','Aufderhar',67813,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(29,'Ulises','Stanton',16540,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(30,'Alta','Schuster',84327,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(31,'Mckenzie','Kuhic',32708,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(32,'Mervin','Kohler',61022,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(33,'Abby','Hills',46608,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(34,'Dangelo','Wilderman',82403,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(35,'Garland','Rutherford',88647,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(36,'Antonia','Stracke',13683,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(37,'Betty','Beer',3975,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(38,'Brody','Sawayn',995,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(39,'Neil','Hoppe',97356,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(40,'Camren','Runolfsson',25758,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(41,'Anjali','Buckridge',89492,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(42,'Nicole','Green',38357,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(43,'Isidro','Turcotte',5357,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(44,'Khalil','Lesch',15761,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(45,'Shania','Hamill',76352,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(46,'Savannah','Bernier',93740,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(47,'Sallie','Labadie',90261,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(48,'Kailyn','Ziemann',98384,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(49,'Jasmin','Beahan',92733,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(50,'Lonny','Marvin',49780,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(51,'Beulah','Prohaska',48015,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(52,'Kobe','Simonis',46173,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(53,'Veronica','Spinka',34435,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(54,'Nickolas','Turner',37158,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(55,'Nyah','Langworth',15823,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(56,'Albert','Green',27592,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(57,'Juston','Ratke',65836,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(58,'Skye','Welch',96566,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(59,'Joesph','Kovacek',86857,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(60,'Yesenia','Jakubowski',85150,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(61,'Weldon','Friesen',18425,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(62,'Viva','Wolf',73081,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(63,'Cristal','Adams',77799,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(64,'Joey','Boyle',57876,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(65,'Julien','Reichel',81765,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(66,'Rosalyn','Upton',10582,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(67,'Francesca','Jones',24269,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(68,'Nathaniel','Larson',34951,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(69,'Leanna','Hahn',82399,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(70,'Samara','Collier',46323,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(71,'Hulda','Hettinger',94223,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(72,'Eleonore','Labadie',38052,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(73,'Robbie','Dach',12547,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(74,'Demetrius','Emard',66957,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(75,'Clyde','Breitenberg',34458,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(76,'Nils','Beatty',98462,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(77,'Kendall','Ankunding',29645,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(78,'Era','Wuckert',47542,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(79,'Toy','Price',23381,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(80,'Colby','Mante',13472,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(81,'Schuyler','Grant',27850,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(82,'Lesley','Lebsack',40605,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(83,'Ethel','Daniel',60765,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(84,'Sigmund','Stiedemann',20471,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(85,'Caitlyn','Grimes',14272,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(86,'Rylee','Rohan',52123,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(87,'Rachel','Doyle',63963,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(88,'Marquis','Kunde',27772,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(89,'Bernhard','Larson',81417,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(90,'Cedrick','Kertzmann',8608,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(91,'Marquise','Daugherty',5839,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(92,'Antonette','Gleichner',51436,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(93,'Anahi','Haag',92863,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(94,'Darrick','Torphy',60920,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(95,'Jerrell','Johns',29693,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(96,'Lonny','Brekke',40533,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(97,'Alanna','Streich',95285,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(98,'Helmer','Ebert',84305,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(99,'Jabari','Mosciski',15385,'2020-10-31 17:13:17','2020-10-31 17:13:17'),(100,'Mallory','Kerluke',2822,'2020-10-31 17:13:17','2020-10-31 17:13:17');
/*!40000 ALTER TABLE `PlaintiffAttorneys` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Plaintiffs`
--

DROP TABLE IF EXISTS `Plaintiffs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Plaintiffs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `FName` varchar(255) NOT NULL,
  `LName` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Plaintiffs`
--

LOCK TABLES `Plaintiffs` WRITE;
/*!40000 ALTER TABLE `Plaintiffs` DISABLE KEYS */;
INSERT INTO `Plaintiffs` VALUES (1,'Billy','Abernathy','2020-10-31 17:13:17','2020-10-31 17:13:17'),(2,'Brennon','Lubowitz','2020-10-31 17:13:17','2020-10-31 17:13:17'),(3,'Leda','Denesik','2020-10-31 17:13:17','2020-10-31 17:13:17'),(4,'Mina','Pfannerstill','2020-10-31 17:13:17','2020-10-31 17:13:17'),(5,'Damien','Erdman','2020-10-31 17:13:17','2020-10-31 17:13:17'),(6,'Lea','Kassulke','2020-10-31 17:13:17','2020-10-31 17:13:17'),(7,'Alvah','Bechtelar','2020-10-31 17:13:17','2020-10-31 17:13:17'),(8,'Howard','Huel','2020-10-31 17:13:17','2020-10-31 17:13:17'),(9,'Stacy','Greenfelder','2020-10-31 17:13:17','2020-10-31 17:13:17'),(10,'Eleazar','Abernathy','2020-10-31 17:13:17','2020-10-31 17:13:17'),(11,'Camren','Kassulke','2020-10-31 17:13:17','2020-10-31 17:13:17'),(12,'Petra','Walter','2020-10-31 17:13:17','2020-10-31 17:13:17'),(13,'Misael','Hermann','2020-10-31 17:13:17','2020-10-31 17:13:17'),(14,'Carmela','Brekke','2020-10-31 17:13:17','2020-10-31 17:13:17'),(15,'Bettie','Vandervort','2020-10-31 17:13:17','2020-10-31 17:13:17'),(16,'Alexa','Feeney','2020-10-31 17:13:17','2020-10-31 17:13:17'),(17,'Brionna','Sporer','2020-10-31 17:13:17','2020-10-31 17:13:17'),(18,'Fermin','Kiehn','2020-10-31 17:13:17','2020-10-31 17:13:17'),(19,'Osbaldo','Hessel','2020-10-31 17:13:17','2020-10-31 17:13:17'),(20,'Natalie','Jerde','2020-10-31 17:13:17','2020-10-31 17:13:17'),(21,'Lura','Douglas','2020-10-31 17:13:17','2020-10-31 17:13:17'),(22,'Nikko','Abshire','2020-10-31 17:13:17','2020-10-31 17:13:17'),(23,'Janae','Kirlin','2020-10-31 17:13:17','2020-10-31 17:13:17'),(24,'Rosario','Walter','2020-10-31 17:13:17','2020-10-31 17:13:17'),(25,'Presley','Armstrong','2020-10-31 17:13:17','2020-10-31 17:13:17'),(26,'Fay','Connelly','2020-10-31 17:13:17','2020-10-31 17:13:17'),(27,'Rosamond','Krajcik','2020-10-31 17:13:17','2020-10-31 17:13:17'),(28,'Marco','Ratke','2020-10-31 17:13:17','2020-10-31 17:13:17'),(29,'Gilbert','Bosco','2020-10-31 17:13:17','2020-10-31 17:13:17'),(30,'Gregg','Jast','2020-10-31 17:13:17','2020-10-31 17:13:17'),(31,'Brook','Hirthe','2020-10-31 17:13:17','2020-10-31 17:13:17'),(32,'Jefferey','Wilderman','2020-10-31 17:13:17','2020-10-31 17:13:17'),(33,'Stan','Bode','2020-10-31 17:13:17','2020-10-31 17:13:17'),(34,'Millie','Dooley','2020-10-31 17:13:17','2020-10-31 17:13:17'),(35,'Ansel','Green','2020-10-31 17:13:17','2020-10-31 17:13:17'),(36,'Yoshiko','Dicki','2020-10-31 17:13:17','2020-10-31 17:13:17'),(37,'Misael','Halvorson','2020-10-31 17:13:17','2020-10-31 17:13:17'),(38,'Cameron','Rau','2020-10-31 17:13:17','2020-10-31 17:13:17'),(39,'Carolanne','Hodkiewicz','2020-10-31 17:13:17','2020-10-31 17:13:17'),(40,'Evie','Hayes','2020-10-31 17:13:17','2020-10-31 17:13:17'),(41,'Jarvis','Kessler','2020-10-31 17:13:17','2020-10-31 17:13:17'),(42,'Roxane','Dooley','2020-10-31 17:13:17','2020-10-31 17:13:17'),(43,'Derrick','Carroll','2020-10-31 17:13:17','2020-10-31 17:13:17'),(44,'Emil','Ebert','2020-10-31 17:13:17','2020-10-31 17:13:17'),(45,'Josefina','Weimann','2020-10-31 17:13:17','2020-10-31 17:13:17'),(46,'Eino','Mayert','2020-10-31 17:13:17','2020-10-31 17:13:17'),(47,'Karolann','Crona','2020-10-31 17:13:17','2020-10-31 17:13:17'),(48,'Ottilie','Borer','2020-10-31 17:13:17','2020-10-31 17:13:17'),(49,'Marlee','Gerlach','2020-10-31 17:13:17','2020-10-31 17:13:17'),(50,'Georgianna','Harber','2020-10-31 17:13:17','2020-10-31 17:13:17'),(51,'Whitney','Kris','2020-10-31 17:13:17','2020-10-31 17:13:17'),(52,'Sherwood','Swaniawski','2020-10-31 17:13:17','2020-10-31 17:13:17'),(53,'Keith','Bogisich','2020-10-31 17:13:17','2020-10-31 17:13:17'),(54,'Nathan','Bednar','2020-10-31 17:13:17','2020-10-31 17:13:17'),(55,'Al','Hilpert','2020-10-31 17:13:17','2020-10-31 17:13:17'),(56,'Braden','Hauck','2020-10-31 17:13:17','2020-10-31 17:13:17'),(57,'Jamey','Hessel','2020-10-31 17:13:17','2020-10-31 17:13:17'),(58,'Vinnie','Rutherford','2020-10-31 17:13:17','2020-10-31 17:13:17'),(59,'Misael','Wilderman','2020-10-31 17:13:17','2020-10-31 17:13:17'),(60,'Ciara','Kerluke','2020-10-31 17:13:17','2020-10-31 17:13:17'),(61,'Sarai','Bernhard','2020-10-31 17:13:17','2020-10-31 17:13:17'),(62,'Jazmyn','Crona','2020-10-31 17:13:17','2020-10-31 17:13:17'),(63,'Adella','Kihn','2020-10-31 17:13:17','2020-10-31 17:13:17'),(64,'Emory','Rice','2020-10-31 17:13:17','2020-10-31 17:13:17'),(65,'Sheila','Bednar','2020-10-31 17:13:17','2020-10-31 17:13:17'),(66,'Jeffery','Parker','2020-10-31 17:13:17','2020-10-31 17:13:17'),(67,'Doris','O\'Connell','2020-10-31 17:13:17','2020-10-31 17:13:17'),(68,'Wanda','Sporer','2020-10-31 17:13:17','2020-10-31 17:13:17'),(69,'Vida','Okuneva','2020-10-31 17:13:17','2020-10-31 17:13:17'),(70,'Vance','Pacocha','2020-10-31 17:13:17','2020-10-31 17:13:17'),(71,'Malvina','Lowe','2020-10-31 17:13:17','2020-10-31 17:13:17'),(72,'Arnoldo','Larkin','2020-10-31 17:13:17','2020-10-31 17:13:17'),(73,'Cristal','Wilderman','2020-10-31 17:13:17','2020-10-31 17:13:17'),(74,'Palma','Grant','2020-10-31 17:13:17','2020-10-31 17:13:17'),(75,'Lincoln','Yundt','2020-10-31 17:13:17','2020-10-31 17:13:17'),(76,'Mike','Kerluke','2020-10-31 17:13:17','2020-10-31 17:13:17'),(77,'Asha','Buckridge','2020-10-31 17:13:17','2020-10-31 17:13:17'),(78,'Herminia','Stark','2020-10-31 17:13:17','2020-10-31 17:13:17'),(79,'Louvenia','McGlynn','2020-10-31 17:13:17','2020-10-31 17:13:17'),(80,'Victoria','Parisian','2020-10-31 17:13:17','2020-10-31 17:13:17'),(81,'Adell','Dach','2020-10-31 17:13:17','2020-10-31 17:13:17'),(82,'Carmelo','Rogahn','2020-10-31 17:13:17','2020-10-31 17:13:17'),(83,'Stuart','Dare','2020-10-31 17:13:17','2020-10-31 17:13:17'),(84,'Elyse','Emmerich','2020-10-31 17:13:17','2020-10-31 17:13:17'),(85,'Rosalyn','Roob','2020-10-31 17:13:17','2020-10-31 17:13:17'),(86,'Ebony','O\'Keefe','2020-10-31 17:13:17','2020-10-31 17:13:17'),(87,'Makenna','Rohan','2020-10-31 17:13:17','2020-10-31 17:13:17'),(88,'Walton','Anderson','2020-10-31 17:13:17','2020-10-31 17:13:17'),(89,'Alanis','Pollich','2020-10-31 17:13:17','2020-10-31 17:13:17'),(90,'Richard','Dare','2020-10-31 17:13:17','2020-10-31 17:13:17'),(91,'Felicita','Wolff','2020-10-31 17:13:17','2020-10-31 17:13:17'),(92,'Maude','Kris','2020-10-31 17:13:17','2020-10-31 17:13:17'),(93,'Rita','Wintheiser','2020-10-31 17:13:17','2020-10-31 17:13:17'),(94,'Lois','Bode','2020-10-31 17:13:17','2020-10-31 17:13:17'),(95,'Cicero','Spinka','2020-10-31 17:13:17','2020-10-31 17:13:17'),(96,'Abagail','Doyle','2020-10-31 17:13:17','2020-10-31 17:13:17'),(97,'Noemy','Jacobson','2020-10-31 17:13:17','2020-10-31 17:13:17'),(98,'Jaydon','Harvey','2020-10-31 17:13:17','2020-10-31 17:13:17'),(99,'Alison','Lakin','2020-10-31 17:13:17','2020-10-31 17:13:17'),(100,'Hellen','Halvorson','2020-10-31 17:13:17','2020-10-31 17:13:17');
/*!40000 ALTER TABLE `Plaintiffs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Types`
--

DROP TABLE IF EXISTS `Types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Types` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Field` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Types`
--

LOCK TABLES `Types` WRITE;
/*!40000 ALTER TABLE `Types` DISABLE KEYS */;
INSERT INTO `Types` VALUES (1,'Civil','2020-10-31 17:13:17','2020-10-31 17:13:17'),(2,'Criminal','2020-10-31 17:13:17','2020-10-31 17:13:17'),(3,'Divorce','2020-10-31 17:13:17','2020-10-31 17:13:17');
/*!40000 ALTER TABLE `Types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-10-31 14:09:51
