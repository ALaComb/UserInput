package com.infosys.WebController;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.infosys.userdata.UserData;

@RestController
public class WebController {
	
	@RequestMapping(method=RequestMethod.GET, value="/user-info")
	public List<UserData> getAll() {
		ArrayList<UserData> u = new ArrayList<UserData>();
		
		return u;
	}
	
	@RequestMapping(method=RequestMethod.PUT, value="/user-info")
	public UserData updateUserData(UserData u) {
		
		return u;
	}
	
	@RequestMapping(method=RequestMethod.POST, value="/user-info")
	public UserData insertUserData(UserData u) {
		
		return u;
	}
	
	@RequestMapping(method=RequestMethod.DELETE, value="/user-info")
	public boolean deleteUserData(UserData u) {
		
		return true;
	}
	

}

