package com.infosys.WebController;

import java.util.List;

import org.hibernate.ObjectNotFoundException;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.infosys.userdata.UserData;
import com.infosys.userdata.UserDataRepository;

@RestController
public class WebController {
	
	UserDataRepository udr;
	
	@RequestMapping(method=RequestMethod.GET, value="/user-info")
	public List<UserData> getAllUserData() {
		return udr.findAll();
	}
	
	@RequestMapping(method=RequestMethod.GET, value="/user-data/{id}")
	public UserData getUserdataById(@PathVariable(value="id") Integer userid) {
		return udr.findById(userid).orElseThrow(() -> new ObjectNotFoundException(userid, "" + userid + " not found in getById") );
	}
	
	@RequestMapping(method=RequestMethod.POST, value="/user-info")
	public UserData createUserData(@RequestBody UserData u) {
		return udr.save(u);
	}
	
	@RequestMapping(method=RequestMethod.PUT, value="/user-data/{id}")
	public UserData updateUserData(@PathVariable(value="id") Integer userid, @RequestBody UserData u) {
		UserData ud = udr.findById(userid).orElseThrow(() -> new ObjectNotFoundException(userid, "" + userid + " not found in update") );
		
		ud.setAddressLineOne(u.getAddressLineOne());
		ud.setAddressLineTwo(u.getAddressLineTwo());
		ud.setCity(u.getCity());
		ud.setCountry(u.getCountry());
		ud.setFirstname(u.getFirstname());
		ud.setLastname(u.getLastname());
		ud.setPhone(u.getPhone());
		ud.setState(u.getState());
		ud.setUserid(u.getUserid());
		ud.setZip(u.getZip());
		
		UserData updatedUserData = udr.save(ud);
		return updatedUserData;
	}
	
	@RequestMapping(method=RequestMethod.DELETE, value="/user-info/{id}")
	public boolean deleteUserData(@PathVariable(value="id") Integer userid) {
		UserData ud = udr.findById(userid).orElseThrow(() -> new ObjectNotFoundException(userid, "" + userid + " not found in update") );
		udr.delete(ud);
		
		return true;
	}
	

}

