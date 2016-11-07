package org.virtue.game.parser;


import org.virtue.Constants;
import org.virtue.game.parser.impl.MySQLParser;
import org.virtue.game.parser.xml.XmlParser;


public class ParserRepository {
	/**
	 * The XML Parser
	 */
	private XmlParser xml;
	/**
	 * The MYSQL Parser
	 */
	private MySQLParser mysql;
	private Parser activeParser;
	/**
	 * Loads the possible parsers into the repo
	 */
	public void load() {
	xml = new XmlParser();
	mysql = new MySQLParser();      
    if(Constants.Mysql) {
    activeParser = mysql;
    } else {
    activeParser = xml;;
	}
	}
	/**
	 * Returns the {@link Parser} for the requested {@link Parsertype}
	 */ 
	public Parser getParser(ParserType type) {
		switch (type) {
		case XML:
		return xml;
		case MYSQL:
		return mysql;
		default:
		break;
		}
		return null;
	}
	/**
	 * Gets the current active parser
	 * @return The active parser
	 */
	public Parser getParser () {
		return activeParser;
	}
}