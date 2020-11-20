-- Harry Potter

insert into `post` (`originId`, `title`, `description`,`length`,`ancestor`,`father`,`fatherIndex`) values (1, 'The Mirror of Erised','I saw through the Mirror of Erised a desire to eat lobster.','400,500,600',1,1,'2,14');
insert into `chapter` (`order`, `title`,  `length`, `originDirectFromFandom`, `postId`, `body`) values (1, "The Mirror of Erised", 400, 1, 1, "Secret of the new plan The Mirror of Erised shows one's deepest desires.");
insert into `chapter` (`order`, `title`,  `length`, `originDirectFromFandom`, `postId`, `body`) values (2, "Beyond the Mirror Lies New York", 500, 1, 1, "and the final monster I saw through it a desire to be in New York.");
insert into `chapter` (`order`, `title`,  `length`, `originDirectFromFandom`, `postId`, `body`) values (3, "Return to the Mortal World", 600, 1, 1, "the unicron from the lasting age  But alas, I had to face reality.");

insert into `post` (`originId`, `title`, `description`,`length`,`ancestor`,`father`,`fatherIndex`) values (1, 'The Split Second','I was changing like a mad man eat lobster.','1200,1300,700,500,1700',1,1,'1,15');
insert into `chapter` (`order`, `title`,  `length`, `originDirectFromFandom`, `postId`, `body`) values (1, "The Mirror of Erised", 1200, 1, 2, "The Mirror of Erised shows one's deepest desires like new moon and angry man.");
insert into `chapter` (`order`, `title`,  `length`, `originDirectFromFandom`, `postId`, `body`) values (2, "Beyond the Mirror Lies New York", 1300, 1, 2, "I saw through it a desire to be in New York. abut new stars were shining \n happy ness");
insert into `chapter` (`order`, `title`,  `length`, `originDirectFromFandom`, `postId`, `body`) values (3, "Return to the Mortal World", 700, 1, 2, "But alas, I had to face reality.\n happy ness and then the monster came to me ");
insert into `chapter` (`order`, `title`,  `length`, `originDirectFromFandom`, `postId`, `body`) values (4, "Return to the Mortal World", 500, 1, 2, "But alas, I had to face reality.\n happy ness");
insert into `chapter` (`order`, `title`,  `length`, `originDirectFromFandom`, `postId`, `body`) values (5, "Return to the Mortal World", 1700, 1, 2, "But alas, I had to face reality.\n happy ness monster from the bottom");

insert into `post` (`originId`, `title`, `description`,`length`,`ancestor`,`father`,`fatherIndex`) values (2, 'on the edit of split second','I was changing like a mad man eat lobster.','1200,1300,700,500,1700',1,2,'0,3');
insert into `chapter` (`order`, `title`,  `length`, `originDirectFromFandom`, `postId`, `body`) values (1, "The Mirror of Erised", 1200, 0, 3, "The Mirror of Erised shows one's deepest desires like new moon and angry man.");
insert into `chapter` (`order`, `title`,  `length`, `originDirectFromFandom`, `postId`, `body`) values (2, "Beyond the Mirror Lies New York", 1300, 0, 3, "I saw through it a desire to be in New York. abut new stars were shining \n happy ness");

-- Hunger Game

insert into `post` (`originId`, `title`, `description`,`length`,`ancestor`,`father`,`fatherIndex`) values (2, 'Huntry Monster Arrives','new moon series of hunger game.','400,1820,430',2,2,'1,7');
insert into `chapter` (`order`, `title`,  `length`, `originDirectFromFandom`, `postId`, `body`) values (1, "The Beginning of Hunger", 400, 1, 4, "The Mirror of Erised shows one's deepest desires like new moon and angry man.");
insert into `chapter` (`order`, `title`,  `length`, `originDirectFromFandom`, `postId`, `body`) values (2, "The Beginning of Hunger2", 1820, 1, 4, "I saw through it a desire to be in New York. abut new stars were shining \n happy ness");
insert into `chapter` (`order`, `title`,  `length`, `originDirectFromFandom`, `postId`, `body`) values (3, "The Beginning of Hunger2", 430, 1, 4, "I saw through it a desire to be in New York. abut new stars were shining \n happy ness");

insert into `post` (`originId`, `title`, `description`,`length`,`ancestor`,`father`,`fatherIndex`) values (2, 'Huntry Monster Arrives','new moon series of hunger game.','340,1800',2,2,'2,20');
insert into `chapter` (`order`, `title`,  `length`, `originDirectFromFandom`, `postId`, `body`) values (1, "The Beginning of Hunger", 340, 1, 5, "The Mirror of Erised shows one's deepest desires like new moon and angry man.");
insert into `chapter` (`order`, `title`,  `length`, `originDirectFromFandom`, `postId`, `body`) values (2, "The Beginning of Hunger2", 1800, 1, 5, "I saw through it a desire to be in New York. abut new stars were shining \n happy ness");

insert into `post` (`originId`, `title`, `description`,`length`,`ancestor`,`father`,`fatherIndex`) values (1, 'Huntry Monster Arrives','new moon series of hunger game.','580,1800',2,4,'0,2');
insert into `chapter` (`order`, `title`,  `length`, `originDirectFromFandom`, `postId`, `body`) values (1, "The Beginning of Hunger", 580, 0, 6, "The Mirror of Erised shows one's deepest desires like new moon and angry man.");
insert into `chapter` (`order`, `title`,  `length`, `originDirectFromFandom`, `postId`, `body`) values (2, "The Beginning of Hunger2", 1800, 0, 6, "I saw through it a desire to be in New York. abut new stars were shining \n happy ness");
