-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: animedb
-- ------------------------------------------------------
-- Server version	8.0.26

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
-- Table structure for table `anime`
--

DROP TABLE IF EXISTS `anime`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `anime` (
  `anime_id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `anime_description` text,
  `age_permission` varchar(10) NOT NULL,
  `anime_type` varchar(25) NOT NULL,
  `studio` varchar(25) NOT NULL,
  `anime_status` varchar(10) NOT NULL,
  `rating` decimal(3,1) DEFAULT '0.0',
  `episodes` int DEFAULT NULL,
  `duration` varchar(20) NOT NULL,
  `date_start` date NOT NULL,
  `date_end` date DEFAULT NULL,
  `views` int DEFAULT NULL,
  `anime_poster` varchar(100) DEFAULT NULL,
  `anime_trailer` varchar(100) DEFAULT NULL,
  `season_of_the_year` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`anime_id`),
  UNIQUE KEY `title_UNIQUE` (`title`)
) ENGINE=InnoDB AUTO_INCREMENT=85 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `anime`
--

LOCK TABLES `anime` WRITE;
/*!40000 ALTER TABLE `anime` DISABLE KEYS */;
INSERT INTO `anime` VALUES (1,'Мой сосед Тоторо','Переехав в деревню, две маленькие сестры, старшая (Сацуки) и младшая (Мэй), знакомятся с лесным духом, которого Мэй называет «Тоторо» (искаженное «тролль»). Подружившись с девочками, Тоторо не только устраивает им воздушную экскурсию по своим владениям, но и помогает повидаться с мамой, которая лежит в больнице.','0+','Полнометражный фильм','Studio Ghibli','Вышло',8.7,1,'1 ч 26 мин.','1988-04-16','1988-04-16',407021,'/images/AnimePosters/totoroPoster.jpg','https://www.youtube.com/embed/uEy3-RmNMWc','Весна'),(2,'Твоё имя','История о парне из Токио и девушке из провинции, которые обнаруживают, что между ними существует странная и необъяснимая связь. Во сне они меняются телами и проживают жизни друг друга. Но однажды эта способность исчезает так же внезапно, как появилась. Тако решает во что бы то ни стало отыскать Мицуху, но способны ли они узнать друг друга в реальной жизни?','12+','Полнометражный фильм','CoMix Wave Films','Вышло',0.0,1,'1 час 46 мин.','2016-08-26','2016-08-26',155212,'/images/AnimePosters/namePoster.jpg','https://www.youtube.com/embed/tT7b5wR0IOM','Лето'),(3,'Монстр','Действие происходит в Германии, в Дюссельдорфе. Неизвестный проникает в дом семьи Либертов, убивает родителей и простреливает их сыну голову, не трогает лишь его сестру, которая забывает всё от шока. В том же городе работает гениальный японский нейрохирург Кэндзо Тэмма, сумевший спасти жизнь мальчика.','17+','Сериал','Madhouse','Вышло',9.0,74,'24 мин.','2004-04-07','2005-09-28',79845,'/images/AnimePosters/monsterPoster.jpg','https://www.youtube.com/embed/msTB5r8nUHU','Весна'),(4,'Сад изящных слов','Юноша по имени Такао встречает таинственную молодую женщину. Их случайные и как будто ни к чему не ведущие встречи в парке, где Такао прогуливает занятия, работая над достижением своей странной мечты — посвятить жизнь конструированию и изготовлению обуви — повторяются снова и снова… правда, только в ненастные дни. Сердца героев начинают приоткрываться друг другу, но на это нужно время, а впереди уже маячит конец сезона дождей…','0+','Полнометражный фильм','CoMix Wave Films','Вышло',0.0,1,'46 мин.','2013-05-31','2013-05-31',57800,'/images/AnimePosters/gardenPoster.jpg','https://www.youtube.com/embed/udDIkl6z8X0','Весна'),(62,'Врата Штейна','Действие сериала происходит летом 2010 года в Акихабаре. Группа друзей переделывает микроволновку в некое устройство, способное посылать текстовые сообщения в прошлое. Пока они проводят над устройством различные эксперименты, ими заинтересовывается таинственная организация SERN, которая также проводит исследования по путешествиям во времени. SERN начинает преследовать друзей, и теперь главным героям предстоит найти способ не быть захваченными ими.','13+','Сериал','White Fox','Вышло',0.0,24,'24 мин.','2011-04-06','2011-09-14',108453,'/images/AnimePosters/steinPoster.jpg','https://www.youtube.com/embed/3ngiZjmnPgc','Весна'),(72,'Стальной алхимик: Братство','В этом мире существуют алхимики — люди, владеющие искусством алхимии, способностью манипулировать материей и преобразовывать вещество. Все они ограничены основным Законом алхимии: нельзя алхимическим путём получить что-то, не пожертвовав чем-то равноценным полученному. Лишь с помощью легендарного философского камня, способ создания которого утерян, можно обойти этот Закон.\r\nГлавные герои, братья Эдвард и Альфонс Элрики, пострадали в детстве при попытке вернуть к жизни свою мать, умершую от болезни. Они забыли основной Закон алхимии и жестоко поплатились за это: Альфонс потерял всё своё тело, а Эдвард — руку и ногу. Эдвард сумел спасти лишь душу Альфонса, запечатав её в старинных доспехах.\r\nСпустя много лет Эдвард сдаёт государственный экзамен на звание алхимика и получает прозвище «Стальной Алхимик». Братья начинают путешествие с целью найти философский камень и вернуть с его помощью утраченное много лет назад.','17+','Сериал','Bones','Вышло',0.0,64,'24 мин.','2009-04-05','2010-07-04',101234,'/images/AnimePosters/brotherhoodPoster.jpg','https://www.youtube.com/embed/XbA5-d7Gbz8','Весна'),(75,'Пираты «Чёрной лагуны» ','Рокуро Окадзима — типичный японский служащий, работающий на крупную корпорацию и живущий в городе, население которого едва ли не полностью состоит из похожих людей. Как и у многих, его обычный день компонуют многочисленные «пинки» начальства и «деловые встречи», обязывающие Рокуро не столько работать, сколько выпивать вместе с клиентами.\r Одним днём привычный образ жизни «рабочей лошадки» нарушает неожиданная командировка. В качестве посыльного, которому вверили диск с чрезвычайно важной информацией, начальство отправляет Рокуро в тёплые воды Южно-Китайского моря. Казалось бы, нужно всего-то пересечь пару десятков морских миль, сойти у берегов Борнео и вручить ценную посылку менеджеру тамошнего филиала. Но, как известно, не всё творится, что просто говорится. По пути корабль, на котором плывёт Рокуро, захватывают пираты, нанятые русской мафией.\r Расставшись с посылкой, взамен получив пару болезненных ударов, Рокуро решает, что отделался мелкой монетой. ','17+','Сериал','Madhouse','Вышло',8.0,12,'24 мин.','2006-04-09','2006-06-25',48205,'/images/AnimePosters/lagoonPoster.jpg','https://www.youtube.com/embed/d4EbGC7fKnQ','Весна'),(76,'Созданный в Бездне','Человечество всегда тяготело к изучению неизведанного. Даже если неизведанное хранило в себе безграничную опасность... Много сотен лет назад посреди южного моря был обнаружен остров, в основании которого зияло громадное отверстие. Вопрос, что же находится там, глубоко внизу, мгновенно отравил умы желающих заполучить предполагаемые богатства. Бесчисленные искатели приключений мало-помалу прибывали на этот клочок земли, спускались вниз, и вскоре выяснилось, что поживиться там и правда есть чем. Однако вместе с тем люди, отправлявшиеся всё ниже и ниже и возвращавшиеся обратно, рассказывали о необычайных и кровожадных существах, погубивших их товарищей, а также выдвигали теории, что у дыры на самом деле нет дна. И где-то глубоко внизу родилось название — Бездна.\r Со временем вокруг отверстия образовался город Орф, построенный потомками первых исследователей Бездны на костях своих отважных предков.','17+','Сериал','Kinema Citrus','Вышло',0.0,13,'25 мин.','2017-07-07','2017-09-29',78951,'/images/AnimePosters/abyssPoster.jpg','https://www.youtube.com/embed/MuboGrmPDIg','Лето'),(77,'Готика','Действие сериала происходит в 1924 году в альтернативной Европе в Совилле, небольшом европейском княжестве, сокрытом от посторонних глаз Альпами.\r\nКадзуя Кудзё, студент по обмену из Японии и младший сын из семьи потомственных военных, обучается здесь в престижной Академии Святой Маргариты. В академии очень популярны городские легенды и разнообразные страшилки, на большую часть которых Кадзуя не обращает никакого внимания, но история о «Королеве Бэрри», таинственном корабле-призраке, чрезвычайно интригует его.\r\nЕго миниатюрную подругу Викторику де Блуа куда больше интересуют реальные истории. Благодаря острому уму и непревзойдённой логике она решает загадки, которые не могут раскусить даже известнейшие городские сыщики.\r\nПо иронии судьбы, любознательный характер Викторики приводит парочку на борт корабля, точь-в-точь подходящего под описание «Королевы Бэрри», корабля, который, может быть, является ключом к разгадке зловещей тайны...','17+','Сериал','Bones','Вышло',9.0,24,'24 мин.','2011-01-08','2011-07-02',67891,'/images/AnimePosters/gosickPoster.jpg','https://www.youtube.com/embed/QMFLC-SKtFs','Зима'),(80,'Ковбой Бибоп','2071 год. Человечество колонизировало всю Солнечную Систему, основав колонии от Венеры до Юпитера. Но десятилетия тому назад из-за техногенной катастрофы была уничтожена Луна. Последствия оказались катастрофическими: непрерывные метеоритные дожди сделали жизнь на поверхности Земли невозможной, а в первые недели после катастрофы погибло 4,7 миллиарда человек. Большая часть выживших перебралась в колонии на другие планеты.\r\nСо временем по всей Солнечной Системе разрослись и набрали силу преступные синдикаты, для борьбы с которыми правительство возродило древнюю практику охоты за головами. Отныне охотники за головами разъезжают по всей Солнечной Системе в поисках целей.\r\nСпайк Шпигель и Джет Блэк — охотники. Волею судьбы они оказались на космическом корабле «Bebop 268710». Путешествуя вместе, они подбирают Фэй Валентайн — очаровательную картёжницу с невероятно огромным долгом, Радикал Эдварда — компьютерного гения и генетически модифицированную собаку Эйн.','17+','Сериал','Sunrise','Вышло',0.0,26,'24 мин.','1998-04-03','1999-04-24',55183,'/images/AnimePosters/bebopPoster.jpg','https://www.youtube.com/embed/kGzneAKtAgg','Весна'),(81,'Самурай Чамплу','Мугэн — бывший пират. Агрессивный, безрассудный, он готов в любой момент насилием ответить на чей угодно вызов. Он носит за спиной меч, не традиционную катану, и использует уникальный боевой стиль, напоминающий брейк-данс и капоэйру.\r\nДзин — ронин, ведёт себя в традиционной стоической манере самурая эры Токугава. Он носит катану с вакидзаси и великолепно владеет клинком в традиционном японском стиле.\r\nТрудно найти двух более не похожих друг на друга людей, они сразу не понравились друг другу. Итогом их первой встречи стала сгоревшая таверна и смерть сына местного префекта, а самих их, надышавшихся угарным газом, бросают в тюрьму.\r\nОт смерти их спасает девушка Фу, работавшая в сгоревшей таверне. За спасение она просит помочь ей найти «самурая, пахнущего подсолнухами»...','17+','Сериал','Manglobe','Вышло',10.0,26,'24 мин.','2004-05-20','2005-03-19',49009,'/images/AnimePosters/champlooPoster.jpg','https://www.youtube.com/embed/5omGGKwndXg','Весна'),(82,'Кланнад','Томоя Окадзаки — бездельник, уверенный, что жизнь скучна, а сам он ни на что не годен. Он ненавидит свой город. Вместе с другом Сунохарой они постоянно прогуливают школу и делают что им заблагорассудится.\r\nОднажды, по пути в школу, у подножия холма Томоя проходит мимо девушки, что-то бормочущей самой себе под нос. Внезапно та вскрикивает «Булочка!», чем привлекает внимание Томои. Вскоре он узнаёт, что зовут её Нагиса Фурукава и что она частенько выкрикивает название чего-то вкусного в моменты, когда нервничает.\r\nПроходит время, Томоя пересекается с Нагисой в школе всё чаще и чаще, и постепенно они становятся друзьями.\r\nТомоя узнаёт, что Нагиса была вынуждена остаться на второй год из-за болезни, все её друзья уже окончили школу, а сама она мечтает о восстановлении школьного драмкружка. Заявляя, что ему всё равно больше нечем заняться, Томоя решает помочь Нагисе с её мечтой. Со временем к ним присоединяются ещё четыре девушки.','13+','Сериал','Kyoto Animation','Вышло',0.0,23,'24 мин.','2007-10-05','2008-03-28',97649,'/images/AnimePosters/clannadPoster.jpg','https://www.youtube.com/embed/pTTsmwHxHns','Осень'),(83,'Психопаспорт','К 2112 году умелая и прогрессивная Япония смогла создать утопичную идеалистическую модель общества, считавшуюся философами древности недостижимой. Толчком к этому послужила замена устаревшего государственного аппарата многофункциональной системой под названием «Сивилла», на которую люди возложили ответственность за сохранение порядка и обеспечение безопасности в обществе. Введение безотказной системы с неограниченными правами способствовало снижению преступности почти до нуля. На основе данных «психопаспорта» — уникальной характеристики личности — система мгновенно определяет индивидуальный коэффициент преступности — вероятность, с которой человек может совершить преступление, указанная в числовом значении — и, если коэффициент превышает норму, беспристрастно судит его как потенциального преступника.\r\nС приходом «Сивиллы» нормализовался уровень спокойствия среди населения. Постепенно люди превратились в бесстрашную инертную массу, толпу, неспособную распознать преступление, совершаемое прямо у всех на глазах. Лишённая погрешностей система показала, что вовсе не лишена погрешностей. Её слабость, как ни странно, оказалась в людях, которых она защищает. Полностью избавиться от потенциальных преступников невозможно, и случаи насилия, хоть и редко, но будут происходить. Те, чей коэффициент преступности ненамного превышает норму, «Сивилла» отправляет на принудительное лечение, а тех, кто переступил черту безвозвратно — приговаривает к уничтожению.','17+','Сериал','Production I.G','Вышло',0.0,22,'23 мин.','2012-10-12','2013-03-22',54789,'/images/AnimePosters/passportPoster.jpg','https://www.youtube.com/embed/4O7jg41_JeA','Осень'),(84,'Евангелион нового поколения','В 2015 году на Землю вновь нападают Ангелы, чужеродные боевые машины, отличающиеся громадными размерами и сокрушительной силой. Единственной надеждой для спасения человечества являются «Евангелионы» (сокращённо «Ева»), человекоподобные боевые машины, разработанные Nerv, специальным отделом Организации Объединённых Наций. «Евы» в состоянии выдержать все нападения Ангелов, однако есть одна особенность — пилотировать роботов может ограниченное число людей. Только горстка подростков, рождённых четырнадцать лет назад, через девять месяцев после первого появления Ангелов, может управлять «Евами». Один из них — Синдзи Икари, отец которого является руководителем Nerv. Втянутый в водоворот битв и событий, которых он не понимает, Синдзи вынужден проникнуть в глубины собственного внутреннего мира, чтобы найти силы и храбрость не только для сражений, но и для выживания, иначе он рискует потерять всё.','13+','Сериал','Gainax','Вышло',9.0,26,'24 мин.','1995-04-10','1996-03-27',85663,'/images/AnimePosters/evaPoster.jpg','https://www.youtube.com/embed/13nSISwxrY4','Осень');
/*!40000 ALTER TABLE `anime` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `anime_rating`
--

DROP TABLE IF EXISTS `anime_rating`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `anime_rating` (
  `anime_id` int NOT NULL,
  `user_id` int NOT NULL,
  `rating` decimal(3,1) DEFAULT NULL,
  PRIMARY KEY (`anime_id`,`user_id`),
  KEY `fk_anime_has_users_users2_idx` (`user_id`),
  KEY `fk_anime_has_users_anime2_idx` (`anime_id`),
  CONSTRAINT `fk_anime_has_users_anime2` FOREIGN KEY (`anime_id`) REFERENCES `anime` (`anime_id`),
  CONSTRAINT `fk_anime_has_users_users2` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `anime_rating`
--

LOCK TABLES `anime_rating` WRITE;
/*!40000 ALTER TABLE `anime_rating` DISABLE KEYS */;
INSERT INTO `anime_rating` VALUES (1,1,9.0),(1,49,7.0),(1,53,10.0),(3,53,9.0),(75,53,8.0),(77,1,9.0),(81,1,10.0);
/*!40000 ALTER TABLE `anime_rating` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `animedirector`
--

DROP TABLE IF EXISTS `animedirector`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `animedirector` (
  `director_id` int NOT NULL AUTO_INCREMENT,
  `director_name` varchar(45) NOT NULL,
  `director_description` text,
  PRIMARY KEY (`director_id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `animedirector`
--

LOCK TABLES `animedirector` WRITE;
/*!40000 ALTER TABLE `animedirector` DISABLE KEYS */;
INSERT INTO `animedirector` VALUES (1,'Хаяо Миядзаки','Хая́о Миядза́ки — японский режиссёр-аниматор, продюсер, сценарист, писатель и мангака. Он родился в семье владельца авиационной фабрики, с детства увлёкся рисованием манги и анимацией. В 1964 году он познакомился с Исао Такахатой, совместно с которым впоследствии основал анимационную студию Studio Ghibli.'),(2,'Макото Синкай','Макото Синкай — японский режиссёр, аниматор и сэйю, родился в префектуре Нагано в 1973 году. Настоящее имя — Макото Ниицу. Фильм Синкая «Твоё имя», вышедший в 2016 году, некоторое время был самым кассовым аниме в мире за всю историю. Макото Синкай изучал японскую литературу в университете.'),(3,'Масаюки Кодзима','Масаюки Кодзима (Masayuki Kojima) - японский аниматор, художник раскадровки и режиссер, наиболее известный благодаря режиссуре известного аниме-сериала Monster and Made in Abyss. Он родился 11 марта 1961 года в Яманаси, Яманаси, Япония.'),(16,'Хироси Хамасаки','Японский режиссёр-аниматор, раскадровщик, дизайнер персонажей.'),(17,'Такуя Сато','Японский аниме-сценарист и режиссер.'),(18,'Ясухиро Ириэ','Ясухиро Ирие - японский аниматор, дизайнер персонажей и режиссер аниме.'),(19,'Рэй Хироэ','Хироэ Рэй – японский мангака, наиболее известный своим последним манга-сериалом «Черная лагуна». При работе над додзинси-мангой он пользуется псевдонимами Red Bear и TEX-MEX.'),(20,'Хитоси Намба','Хитоши Нанба - японский режиссер аниме. Нанба начал работать в аниме-индустрии в 1982 году и снял свой первый полный сериал в 1989 году. С тех пор он снял некоторые сериалы, в том числе Хероман, Госик и Голден Камуй.'),(21,'Синъитиро Ватанабэ','Синъитиро Ватанабэ — японский режиссёр-аниматор, сценарист и продюсер. Он стал известен после создания критически и коммерчески успешных аниме-сериалов Cowboy Bebop и «Самурай Чамплу». '),(31,'Дзюн Маэда','Дзюн Маэда — японский сценарист, писатель, композитор и учредитель бренда визуальных новелл компании Key. В основном внёс свой вклад в качестве сценариста и композитора для игр, которые выпускает его компания.'),(32,'Такэо Такахаси','Японский режиссер аниме , который также принимал участие в разработке раскадровок и предоставлении ключевая анимация для аниме.Википедия  site:star-wiki.ru'),(33,'Кодзи Ямамото','Режиссёр'),(34,'Хидэаки Анно','Хидэаки Анно — японский режиссёр аниме и кинофильмов. Один из основателей студии Gainax. Президент Studio Khara и председатель Anime Tokusatsu Archive Centre. Женат на мангаке Моёко Анно с 2002 года. Агностик и вегетарианец. Произведения, режиссируемые Анно, отличаются жизненностью и реалистичностью передачи эмоций');
/*!40000 ALTER TABLE `animedirector` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `animedirector_anime`
--

DROP TABLE IF EXISTS `animedirector_anime`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `animedirector_anime` (
  `director_id` int NOT NULL,
  `anime_id` int NOT NULL,
  PRIMARY KEY (`director_id`,`anime_id`),
  KEY `fk_AnimeDirector_has_Anime_Anime1_idx` (`anime_id`),
  KEY `fk_AnimeDirector_has_Anime_AnimeDirector1_idx` (`director_id`),
  CONSTRAINT `fk_AnimeDirector_has_Anime_Anime1` FOREIGN KEY (`anime_id`) REFERENCES `anime` (`anime_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_AnimeDirector_has_Anime_AnimeDirector1` FOREIGN KEY (`director_id`) REFERENCES `animedirector` (`director_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `animedirector_anime`
--

LOCK TABLES `animedirector_anime` WRITE;
/*!40000 ALTER TABLE `animedirector_anime` DISABLE KEYS */;
INSERT INTO `animedirector_anime` VALUES (1,1),(2,2),(3,3),(2,4),(16,62),(17,62),(18,72),(19,75),(3,76),(20,77),(21,80),(21,81),(31,82),(33,83),(34,84);
/*!40000 ALTER TABLE `animedirector_anime` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `animeimg`
--

DROP TABLE IF EXISTS `animeimg`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `animeimg` (
  `img_id` int NOT NULL AUTO_INCREMENT,
  `img_link` varchar(100) NOT NULL,
  `anime_id` int NOT NULL,
  PRIMARY KEY (`img_id`,`anime_id`),
  KEY `fk_AnimeIMG_Anime1_idx` (`anime_id`),
  CONSTRAINT `fk_AnimeIMG_Anime1` FOREIGN KEY (`anime_id`) REFERENCES `anime` (`anime_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=294 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `animeimg`
--

LOCK TABLES `animeimg` WRITE;
/*!40000 ALTER TABLE `animeimg` DISABLE KEYS */;
INSERT INTO `animeimg` VALUES (14,'/images/AnimeImages/totoro1.jpg',1),(15,'/images/AnimeImages/totoro2.jpg',1),(16,'/images/AnimeImages/totoro3.jpg',1),(17,'/images/AnimeImages/totoro4.jpg',1),(18,'/images/AnimeImages/totoro5.jpg',1),(19,'/images/AnimeImages/totoro6.jpg',1),(20,'/images/AnimeImages/totoro7.jpg',1),(21,'/images/AnimeImages/totoro8.jpg',1),(106,'/images/AnimeImages/stein1.jpg',62),(107,'/images/AnimeImages/stein2.jpg',62),(108,'/images/AnimeImages/stein3.jpg',62),(109,'/images/AnimeImages/stein4.jpg',62),(110,'/images/AnimeImages/stein5.jpg',62),(111,'/images/AnimeImages/stein6.jpg',62),(112,'/images/AnimeImages/stein7.jpg',62),(113,'/images/AnimeImages/stein8.jpg',62),(179,'/images/AnimeImages/brotherhood1.jpg',72),(180,'/images/AnimeImages/brotherhood2.jpg',72),(181,'/images/AnimeImages/brotherhood3.jpg',72),(182,'/images/AnimeImages/brotherhood4.jpg',72),(183,'/images/AnimeImages/brotherhood5.jpg',72),(184,'/images/AnimeImages/brotherhood6.jpg',72),(185,'/images/AnimeImages/brotherhood7.jpg',72),(186,'/images/AnimeImages/brotherhood8.jpg',72),(206,'/images/AnimeImages/wordsGarden1.jpg',4),(207,'/images/AnimeImages/wordsGarden2.jpg',4),(208,'/images/AnimeImages/wordsGarden3.jpg',4),(209,'/images/AnimeImages/wordsGarden4.jpg',4),(210,'/images/AnimeImages/wordsGarden5.jpg',4),(211,'/images/AnimeImages/wordsGarden6.jpg',4),(212,'/images/AnimeImages/wordsGarden7.jpg',4),(213,'/images/AnimeImages/wordsGarden8.jpg',4),(214,'/images/AnimeImages/yourName1.jpg',2),(215,'/images/AnimeImages/yourName2.jpg',2),(216,'/images/AnimeImages/yourName3.jpg',2),(217,'/images/AnimeImages/yourName4.jpg',2),(218,'/images/AnimeImages/yourName5.jpg',2),(219,'/images/AnimeImages/yourName6.jpg',2),(220,'/images/AnimeImages/yourName7.jpg',2),(221,'/images/AnimeImages/yourName8.jpg',2),(222,'/images/AnimeImages/monster1.jpg',3),(223,'/images/AnimeImages/monster2.jpg',3),(224,'/images/AnimeImages/monster3.jpg',3),(225,'/images/AnimeImages/monster4.jpg',3),(226,'/images/AnimeImages/monster5.jpg',3),(227,'/images/AnimeImages/monster6.jpg',3),(228,'/images/AnimeImages/monster7.jpg',3),(229,'/images/AnimeImages/monster8.jpg',3),(230,'/images/AnimeImages/lagoon1.jpg',75),(231,'/images/AnimeImages/lagoon2.jpg',75),(232,'/images/AnimeImages/lagoon3.jpg',75),(233,'/images/AnimeImages/lagoon4.jpg',75),(234,'/images/AnimeImages/lagoon5.jpg',75),(235,'/images/AnimeImages/lagoon6.jpg',75),(236,'/images/AnimeImages/lagoon7.jpg',75),(237,'/images/AnimeImages/lagoon8.jpg',75),(238,'/images/AnimeImages/abyss1.jpg',76),(239,'/images/AnimeImages/abyss2.jpg',76),(240,'/images/AnimeImages/abyss3.jpg',76),(241,'/images/AnimeImages/abyss4.jpg',76),(242,'/images/AnimeImages/abyss5.jpg',76),(243,'/images/AnimeImages/abyss6.jpg',76),(244,'/images/AnimeImages/abyss7.jpg',76),(245,'/images/AnimeImages/abyss8.jpg',76),(246,'/images/AnimeImages/gosick1.jpg',77),(247,'/images/AnimeImages/gosick2.jpg',77),(248,'/images/AnimeImages/gosick3.jpg',77),(249,'/images/AnimeImages/gosick4.jpg',77),(250,'/images/AnimeImages/gosick5.jpg',77),(251,'/images/AnimeImages/gosick6.jpg',77),(252,'/images/AnimeImages/gosick7.jpg',77),(253,'/images/AnimeImages/gosick8.jpg',77),(254,'/images/AnimeImages/bebop1.jpg',80),(255,'/images/AnimeImages/bebop2.jpg',80),(256,'/images/AnimeImages/bebop3.jpg',80),(257,'/images/AnimeImages/bebop4.jpg',80),(258,'/images/AnimeImages/bebop5.jpg',80),(259,'/images/AnimeImages/bebop6.jpg',80),(260,'/images/AnimeImages/bebop7.jpg',80),(261,'/images/AnimeImages/bebop8.jpg',80),(262,'/images/AnimeImages/champloo1.jpg',81),(263,'/images/AnimeImages/champloo2.jpg',81),(264,'/images/AnimeImages/champloo3.jpg',81),(265,'/images/AnimeImages/champloo4.jpg',81),(266,'/images/AnimeImages/champloo5.jpg',81),(267,'/images/AnimeImages/champloo6.jpg',81),(268,'/images/AnimeImages/champloo7.jpg',81),(269,'/images/AnimeImages/champloo8.jpg',81),(270,'/images/AnimeImages/clannad1.jpg',82),(271,'/images/AnimeImages/clannad2.jpg',82),(272,'/images/AnimeImages/clannad3.jpg',82),(273,'/images/AnimeImages/clannad4.jpg',82),(274,'/images/AnimeImages/clannad5.jpg',82),(275,'/images/AnimeImages/clannad6.jpg',82),(276,'/images/AnimeImages/clannad7.jpg',82),(277,'/images/AnimeImages/clannad8.jpg',82),(278,'/images/AnimeImages/passport1.jpg',83),(279,'/images/AnimeImages/passport2.jpg',83),(280,'/images/AnimeImages/passport3.jpg',83),(281,'/images/AnimeImages/passport4.jpg',83),(282,'/images/AnimeImages/passport5.jpg',83),(283,'/images/AnimeImages/passport6.jpg',83),(284,'/images/AnimeImages/passport7.jpg',83),(285,'/images/AnimeImages/passport8.jpg',83),(286,'/images/AnimeImages/eva1.jpg',84),(287,'/images/AnimeImages/eva2.jpg',84),(288,'/images/AnimeImages/eva3.jpg',84),(289,'/images/AnimeImages/eva4.jpg',84),(290,'/images/AnimeImages/eva5.jpg',84),(291,'/images/AnimeImages/eva6.jpg',84),(292,'/images/AnimeImages/eva7.jpg',84),(293,'/images/AnimeImages/eva8.jpg',84);
/*!40000 ALTER TABLE `animeimg` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `animevideo`
--

DROP TABLE IF EXISTS `animevideo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `animevideo` (
  `video_id` int NOT NULL AUTO_INCREMENT,
  `video_link` varchar(100) NOT NULL,
  `anime_id` int NOT NULL,
  `video_description` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`video_id`,`anime_id`),
  KEY `fk_AnimeVideo_Anime_idx` (`anime_id`),
  CONSTRAINT `fk_AnimeVideo_Anime` FOREIGN KEY (`anime_id`) REFERENCES `anime` (`anime_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `animevideo`
--

LOCK TABLES `animevideo` WRITE;
/*!40000 ALTER TABLE `animevideo` DISABLE KEYS */;
INSERT INTO `animevideo` VALUES (45,'//aniqit.com/video/46583/ebab6ace632a287b6e006add9324beae/720p',1,'anime movie'),(46,'//aniqit.com/serial/19895/d39e6c8bc218b9d4a08873af107a4c84/720p',3,'anime serial'),(47,'//vid1636041205997.vb17121coramclean.pw/movie/686c1b3bf24ea4540fc78ed1f1d8c483/iframe',4,'anime movie'),(48,'//aniqit.com/video/34204/89e3a2101a462afdb31f28d133a32880/720p',2,'anime movie'),(49,'//aniqit.com/serial/7884/d5bb968fd3ac83b29b02a5c955166563/720p',72,'anime serial'),(50,'//kodik.info/serial/9804/25f894b2a3029da643e52ec7a25925c7/720p',62,'anime serial'),(51,'//aniqit.com/season/39771/4e37e52abb25ebf86aedf4ad768a95ef/720p',75,NULL),(52,'//aniqit.com/serial/4261/9ac2e2aafe89337505b09cbc09cdec7e/720p',76,NULL),(53,'//aniqit.com/serial/5605/1515626f4231d5dcb7147830a404f089/720p',77,NULL),(54,'//aniqit.com/season/66167/fb2ff431ebe0d42a9829b5ea07f2183d/720p',80,NULL),(55,'//aniqit.com/serial/7715/cc0b2b8c5c0ac97da47af2d344999415/720p',81,NULL),(56,'//aniqit.com/serial/6211/db3cffe8b7f9884c60748c91356db772/720p',82,NULL),(57,'//aniqit.com/serial/7616/d938427ebed77524615a04c15a8b7b7a/720p',83,NULL),(58,'//aniqit.com/serial/5877/c366b8af7a1a826bf38e9a158f213624/720p',84,NULL);
/*!40000 ALTER TABLE `animevideo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `user_id` int NOT NULL,
  `anime_id` int NOT NULL,
  `date_added` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user_comment` text NOT NULL,
  PRIMARY KEY (`user_id`,`anime_id`,`date_added`),
  KEY `fk_users_has_anime_anime1_idx` (`anime_id`),
  KEY `fk_users_has_anime_users1_idx` (`user_id`),
  CONSTRAINT `fk_users_has_anime_anime1` FOREIGN KEY (`anime_id`) REFERENCES `anime` (`anime_id`),
  CONSTRAINT `fk_users_has_anime_users1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (1,1,'2021-12-26 14:39:31','Топ аниме!'),(1,2,'2021-12-26 14:43:36','Пойдёт'),(1,4,'2022-01-01 17:19:47','макото синкай умеет делать аниме!'),(1,62,'2021-12-27 15:46:32','лучшее аниме'),(1,77,'2022-01-13 17:02:07','соглы'),(1,82,'2022-01-11 17:29:59','грусненько конечно'),(49,1,'2021-12-26 18:42:42','на один раз..'),(49,2,'2021-12-26 14:54:07','Ну такое...'),(49,3,'2021-12-26 18:32:32','говно, объективно.'),(49,62,'2021-12-29 15:43:36','top'),(49,77,'2021-12-29 15:53:16','Викторика топ вайфу !)');
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genre`
--

DROP TABLE IF EXISTS `genre`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `genre` (
  `genre_id` int NOT NULL AUTO_INCREMENT,
  `anime_genre` varchar(20) NOT NULL,
  PRIMARY KEY (`genre_id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genre`
--

LOCK TABLES `genre` WRITE;
/*!40000 ALTER TABLE `genre` DISABLE KEYS */;
INSERT INTO `genre` VALUES (1,'Приключения'),(2,'Драма'),(3,'Повседневность'),(4,'Сёнен'),(5,'Сейнен'),(6,'Меха'),(7,'Игры'),(8,'Исекай'),(9,'Экшен'),(10,'Романтика'),(11,'Сёдзе'),(12,'Яой'),(13,'Детектив'),(14,'Триллер'),(15,'Комедия'),(16,'Ужасы');
/*!40000 ALTER TABLE `genre` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genre_anime`
--

DROP TABLE IF EXISTS `genre_anime`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `genre_anime` (
  `genre_id` int NOT NULL,
  `anime_id` int NOT NULL,
  PRIMARY KEY (`genre_id`,`anime_id`),
  KEY `fk_Genre_has_Anime_Anime1_idx` (`anime_id`),
  KEY `fk_Genre_has_Anime_Genre1_idx` (`genre_id`),
  CONSTRAINT `fk_Genre_has_Anime_Anime1` FOREIGN KEY (`anime_id`) REFERENCES `anime` (`anime_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_Genre_has_Anime_Genre1` FOREIGN KEY (`genre_id`) REFERENCES `genre` (`genre_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genre_anime`
--

LOCK TABLES `genre_anime` WRITE;
/*!40000 ALTER TABLE `genre_anime` DISABLE KEYS */;
INSERT INTO `genre_anime` VALUES (1,1),(3,1),(15,1),(2,2),(10,2),(2,3),(5,3),(13,3),(14,3),(16,3),(2,4),(2,62),(5,62),(14,62),(1,72),(4,72),(9,72),(5,75),(9,75),(15,75),(1,76),(2,76),(13,76),(2,77),(10,77),(13,77),(1,80),(9,80),(15,80),(1,81),(9,81),(15,81),(2,82),(3,82),(10,82),(9,83),(13,83),(14,83),(2,84),(6,84),(9,84);
/*!40000 ALTER TABLE `genre_anime` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `maincharacters`
--

DROP TABLE IF EXISTS `maincharacters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `maincharacters` (
  `character_id` int NOT NULL AUTO_INCREMENT,
  `char_name` varchar(45) NOT NULL,
  `anime_id` int NOT NULL,
  PRIMARY KEY (`character_id`,`anime_id`),
  KEY `fk_MainCharacters_Anime1_idx` (`anime_id`),
  CONSTRAINT `fk_MainCharacters_Anime1` FOREIGN KEY (`anime_id`) REFERENCES `anime` (`anime_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=100 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `maincharacters`
--

LOCK TABLES `maincharacters` WRITE;
/*!40000 ALTER TABLE `maincharacters` DISABLE KEYS */;
INSERT INTO `maincharacters` VALUES (1,'Мицуха Миямидзу',2),(2,'Таки Татибана',2),(3,'Сацуки Кусакабэ',1),(4,'Мэй Кусакабэ',1),(5,'Тоторо',1),(6,'Анна Либерт',3),(7,'Йохан Вильгельм Либерт',3),(8,'Кэндзо Тэмма',3),(25,'Юкари Юкино',4),(44,'Ринтаро Окабэ',62),(45,'Курису Макисэ',62),(54,'Такао Акидзуки',4),(67,'Эдвард Элрик',72),(68,'Альфонс Элрик',72),(69,'Уинри Рокбелл',72),(76,'Рок',75),(77,'Реви',75),(78,'Датч',75),(79,'Рэг',76),(80,'Рико',76),(81,'Нанати',76),(82,'Кадзуя Кудзё ',77),(83,'Викторика де Блуа',77),(85,'Спайк Шпигель',80),(86,'Джет Блэк',80),(87,'Фэй Валентайн',80),(88,'Мугэн',81),(89,'Дзин',81),(90,'Фу Касуми',81),(91,'Томоя Окадзаки',82),(92,'Нагиса Фурукава',82),(93,'Фуко Ибуки',82),(94,'Аканэ Цунэмори',83),(95,'Синъя Когами',83),(96,'Сёго Макисима',83),(97,'Синдзи Икари',84),(98,'Рей Аянами',84),(99,'Аска Лэнгли Сорью',84);
/*!40000 ALTER TABLE `maincharacters` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_favorite_anime`
--

DROP TABLE IF EXISTS `user_favorite_anime`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_favorite_anime` (
  `anime_id` int NOT NULL,
  `user_id` int NOT NULL,
  `viewed` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`anime_id`,`user_id`),
  KEY `fk_anime_has_users_users1_idx` (`user_id`),
  KEY `fk_anime_has_users_anime1_idx` (`anime_id`),
  CONSTRAINT `fk_anime_has_users_anime1` FOREIGN KEY (`anime_id`) REFERENCES `anime` (`anime_id`),
  CONSTRAINT `fk_anime_has_users_users1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_favorite_anime`
--

LOCK TABLES `user_favorite_anime` WRITE;
/*!40000 ALTER TABLE `user_favorite_anime` DISABLE KEYS */;
INSERT INTO `user_favorite_anime` VALUES (4,1,'Просмотрено'),(62,49,NULL),(72,1,'Просмотрено'),(75,53,'Просмотрено'),(77,1,''),(77,49,NULL),(81,1,'Просмотрено'),(82,1,'');
/*!40000 ALTER TABLE `user_favorite_anime` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `user_name` varchar(45) NOT NULL,
  `user_email` varchar(100) NOT NULL,
  `user_password` varchar(100) NOT NULL,
  `user_sex` varchar(10) DEFAULT NULL,
  `user_age` int DEFAULT NULL,
  `regist_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user_avatar` varchar(45) DEFAULT NULL,
  `user_role` varchar(45) NOT NULL DEFAULT 'user',
  `user_token` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_email_UNIQUE` (`user_email`),
  UNIQUE KEY `user_name_UNIQUE` (`user_name`)
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin','adminMail@gmail.com','$2b$10$qbZblBsRM2c4lUtkiiSw0OMi.Rv/Ea0r7zHMVLA56vCBGhvILbHyu','муж',20,'2021-11-01 13:13:08','adminAvatar.jpg','admin','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiYWRtaW5NYWlsQGdtYWlsLmNvbSIsImlhdCI6MTY0MjA4MTg4MywiZXhwIjoxNjQyMzQxMDgzfQ.y-g_si-yoCEimyS4Y1K0gzxEgBYk5uDQi1bJ4cD5ZiE'),(49,'AnimeLover_69','pussyliker_221@mail.com','$2b$10$8qIH.Q6GxA8nf1cfBY65Pu.ISz0EvU25cwCMPDRaaVowBMDVAJgCu','жен',37,'2021-11-01 13:20:33','cockavatar.jpg','user',NULL),(53,'sex_Lover_1488','bestUser228@mail.ru','$2b$10$06YJN2g/pmlgkpDIBgwKJOpCkYf1tXnqO7pnu7rHfYUiVm57dPbIe','жен',41,'2021-12-26 12:45:51','animeAvatarka.png','user',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `voiceacting`
--

DROP TABLE IF EXISTS `voiceacting`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `voiceacting` (
  `sound_id` int NOT NULL AUTO_INCREMENT,
  `sound_name` varchar(30) NOT NULL,
  PRIMARY KEY (`sound_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `voiceacting`
--

LOCK TABLES `voiceacting` WRITE;
/*!40000 ALTER TABLE `voiceacting` DISABLE KEYS */;
INSERT INTO `voiceacting` VALUES (3,'Anilibria'),(4,'AniDUB'),(5,'MC Entertainment'),(6,'Anything Group');
/*!40000 ALTER TABLE `voiceacting` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `voiceacting_anime`
--

DROP TABLE IF EXISTS `voiceacting_anime`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `voiceacting_anime` (
  `sound_id` int NOT NULL,
  `anime_id` int NOT NULL,
  PRIMARY KEY (`sound_id`,`anime_id`),
  KEY `fk_VoiceActing_has_Anime_Anime1_idx` (`anime_id`),
  KEY `fk_VoiceActing_has_Anime_VoiceActing1_idx` (`sound_id`),
  CONSTRAINT `fk_VoiceActing_has_Anime_Anime1` FOREIGN KEY (`anime_id`) REFERENCES `anime` (`anime_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_VoiceActing_has_Anime_VoiceActing1` FOREIGN KEY (`sound_id`) REFERENCES `voiceacting` (`sound_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `voiceacting_anime`
--

LOCK TABLES `voiceacting_anime` WRITE;
/*!40000 ALTER TABLE `voiceacting_anime` DISABLE KEYS */;
INSERT INTO `voiceacting_anime` VALUES (3,1),(5,1),(3,2),(4,2),(6,3),(3,4),(3,62),(4,62),(3,72),(4,72),(3,75),(5,75),(3,76),(4,76),(3,77),(4,77),(3,80),(5,80),(3,81),(5,81),(3,82),(4,82),(3,83),(4,83),(4,84),(5,84);
/*!40000 ALTER TABLE `voiceacting_anime` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-14 17:56:24
