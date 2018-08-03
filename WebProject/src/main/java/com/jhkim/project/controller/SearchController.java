package com.jhkim.project.controller;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.InetAddress;
import java.net.InetSocketAddress;
import java.net.Socket;
import java.net.SocketAddress;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.jhkim.project.param.FlightSearchParam;
import com.jhkim.project.result.BasicResult;
import com.jhkim.project.result.FlightSummaryBookingInfo;

/**
 * Handles requests for the application home page.
 */
@Controller
public class SearchController {
	
	private static final Logger logger = LoggerFactory.getLogger(SearchController.class);
		
	/**
	 * 항공권 정보를 검색 요청
	 * @param locale
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "/searchRequest", method = RequestMethod.POST)
	@ResponseBody
	public BasicResult searchRequest(@RequestBody FlightSearchParam flightSearchParam) {
		
		BasicResult result = new BasicResult();
		// 해당 항공사 정보 검색 요청
		try{
			
//			InetAddress addr =  InetAddress.getByName("localhost");
//			SocketAddress socketAddr = new InetSocketAddress(addr, 8000);
//			
//			Socket socket = new Socket();			
//			
//			socket.connect(socketAddr);
//			
//			BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(socket.getOutputStream()));
//			bw.write("");
//			bw.flush();
//			
//			socket.close();
			
			System.out.println(flightSearchParam.getFlightType());
		}
		catch(Exception e){
			logger.debug(e.getMessage());
		}
		
		return result;
	}	
	
	/**
	 * 항공권 정보 결과 수신
	 * @param locale
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "/searchResponse", method = RequestMethod.POST)
	@ResponseBody
	public FlightSummaryBookingInfo searchResponse(@RequestParam FlightSummaryBookingInfo flightSummaryBookingInfo ) {
		
		// 항공사 정보 결과 수신
		
		
		return new FlightSummaryBookingInfo();
	}	
}
