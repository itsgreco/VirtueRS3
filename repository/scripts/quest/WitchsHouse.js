var WitchsHouse = {
		showQuestJournal : function (player, questLog) {
			if(questApi.isFinished(player, 7)) {
				questLog.setJournalLine(player, 1, "");
				questLog.setJournalLine(player, 2, "<col=999999>It was the Duke of Lumbriy the");
				questLog.setJournalLine(player, 3, "<col=999999>ingredients he a birthdat cake. I brought the cook an egg, a pot");
				questLog.setJournalLine(player, 4, "<col=999999>of flour and a bucket of milk and the coo-looking cake with");
				questLog.setJournalLine(player, 5, "<col=999999>them");
				questLog.setJournalLine(player, 6, "");
				questLog.setJournalLine(player, 7, "<col=FFFFFF>QUEST COMPLETE!");
				questLog.setJournalLine(player, 8, "<col=EB981F>I gained <col=EBE076>1 Quest Point<col=EB981F>, <col=EBE076>20 sardines<col=EB981F>, <col=EBE076>500 coins <col=EB981F>and <col=EBE076> 300 Cooking XP<col=EB981F>.");
				questLog.setJournalLine(player, 9, "<col=EB981F>I have also gained <col=EBE076>two prize keys<col=EB981F> for <col=EBE076>Treasure Hunter<col=EB981F>!");
				questLog.setJournalLine(player, 10, "<col=EB981F>The cook now also lets me use his high-quality <col=EBE076>range<col=EB981F>, which burns certain low-");
				questLog.setJournalLine(player, 11, "<col=EB981F>level dishes less often thsn other ranges.");
			} else {
				questLog.setJournalLine(player, 1, "");
				questLog.setJournalLine(player, 2, "<col=EB981F>I can start this quest by speaking to the <col=EBE076>Little boy<col=EB981F> standing by the long garden");
				questLog.setJournalLine(player, 3, "<col=EB981F>just <col=EBE076>West of falador");
				questLog.setJournalLine(player, 4, "<col=EB981F>I must be able to defeat a <col=EBE076>level 49 enemy");
			}
		}
}