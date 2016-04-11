// Game
function ajax_initiateGame(url, parameters)
{
    $.ajax({
        type: "POST",
        url: url, 
        data: parameters,
		dataType: 'text',
        success: function(data) { 
			if(data != "")
			{
				$("#interaction").val(data);
			}
		},
		complete: function(data) { },
        error: function(request, status,error) { }
	});
}

function ajax_startGame(url, parameters)
{
    $.ajax({
        type: "POST",
        url: url, 
        data: parameters,
		dataType: 'text',
        success: function(data) { },
		complete: function(data) { },
        error: function(request, status,error) { }
	});
}

function ajax_endGame(url, parameters)
{
    $.ajax({
        type: "POST",
        url: url, 
        data: parameters,
		dataType: 'text',
        success: function(data) { },
		complete: function(data) { },
        error: function(request, status,error) { }
	});
}

function ajax_getGameResult(url, parameters)
{
    $.ajax({
        type: "POST",
        url: url, 
        data: parameters,
		dataType: 'text',
        success: function(data) { 
			if(data != "")
			{
				var dataList = data.split("@");
				$("#content").html(dataList[0]);
				
				$("#statistic").html(dataList[1]);
			}
		},
		complete: function(data) { },
        error: function(request, status,error) { }
	});
}


// Videowall, Portrait, Vending
function ajax_addInteraction(url, parameters)
{
    $.ajax({
        type: "POST",
        url: url, 
        data: parameters,
		dataType: 'text',
        success: function(data) { },
		complete: function(data) { },
        error: function(request, status,error) { }
	});
}

function ajax_submitForPrint(url, parameters)
{
    $.ajax({
        type: "POST",
        url: url, 
        data: parameters,
		dataType: 'text',
        success: function(data) { 
			$("#photoboothID").val(data);
		},
		complete: function(data) { },
        error: function(request, status,error) { }
	});
}

function ajax_submitForEmail(url, parameters)
{
    $.ajax({
        type: "POST",
        url: url, 
        data: parameters,
		dataType: 'text',
        success: function(data) { 
			$("#photoboothID").val(data);
		},
		complete: function(data) { },
        error: function(request, status,error) { }
	});
}

function ajax_submitForPhotoQR(url, parameters)
{
    $.ajax({
        type: "POST",
        url: url, 
        data: parameters,
		dataType: 'text',
        success: function(data) { 
			if(data != "")
			{
				var list = data.split("@");
				console.log("qr: " + list[0]);
				console.log("photoboothID: " + list[1]);
				$("#photoQR").attr("src", list[0]);
				$("#photoboothID").val(list[1]);
			}
		},
		complete: function(data) { },
        error: function(request, status,error) { }
	});
}

function ajax_submitParticularsAfterPhoto(url, parameters)
{
    $.ajax({
        type: "POST",
        url: url, 
        data: parameters,
		dataType: 'text',
        success: function(data) { },
		complete: function(data) { },
        error: function(request, status,error) { }
	});
}

function ajax_detection(url, parameters)
{
    $.ajax({
        type: "POST",
        url: url, 
        data: parameters,
		dataType: 'text',
        success: function(data) { },
		complete: function(data) { },
        error: function(request, status,error) { }
	});
}

function ajax_getTotalSmile(url, parameters)
{
    $.ajax({
        type: "POST",
        url: url, 
        data: parameters,
		dataType: 'text',
        success: function(data) { 
			$("#smiles_counter_text").html(data);
			
			$("#camera_page").fadeOut(function() {
				playThankYouPlayer();
				$("#thankyou_page").show();
				
				ajax_submitForPrint("function.do", "formType=storePrint&mediaURL=" + triggerVideoURL + "&projectID=" + triggerLibURL + "&border=1&name=&email=&contact=");
			});
		},
		complete: function(data) { },
        error: function(request, status,error) { }
	});
}

function ajax_vending(url, parameters)
{
    $.ajax({
        type: "POST",
        url: url, 
        data: parameters,
		dataType: 'text',
        success: function(data) { },
		complete: function(data) { },
        error: function(request, status,error) { }
	});
}

function ajax_checkReference(url, parameters)
{
    $.ajax({
        type: "POST",
        url: url, 
        data: parameters,
		dataType: 'text',
        success: function(data) { 
			if(data == "TRUE")
			{
			}
			else
			{
			}
		},
		complete: function(data) { },
        error: function(request, status,error) { }
	});
}

function ajax_sendVoucher(url, parameters)
{
    $.ajax({
        type: "POST",
        url: url, 
        data: parameters,
		dataType: 'text',
        success: function(data) { 
			if(data == "TRUE")
			{
			}
			else
			{
				if(data == "FAIL:REFERENCE_ALREADY_EXIST")
				{
				}
				else
				{
				}
			}
		},
		complete: function(data) { },
        error: function(request, status,error) { }
	});
}

function ajax_sendCatalogue(url, parameters)
{
    $.ajax({
        type: "POST",
        url: url, 
        data: parameters,
		dataType: 'text',
        success: function(data) { 
			if(data == "TRUE")
			{
			}
			else
			{
			}
		},
		complete: function(data) { },
        error: function(request, status,error) { }
	});
}

function ajax_randomPhotoGallery(url, parameters, index)
{
    $.ajax({
        type: "POST",
        url: url, 
        data: parameters,
		dataType: 'text',
        success: function(data) { 
			if(index == 1)
			{
				if(current_1 == true)
				{
					$("#gallery_content_1_1").html(data);
					$("#gallery_content_1_2").fadeOut(function() {
						$("#gallery_content_1_1").fadeIn();
					});
					
					current_1 = false;
				}
				else
				{
					$("#gallery_content_1_2").html(data);
					$("#gallery_content_1_1").fadeOut(function() {
						$("#gallery_content_1_2").fadeIn();
					});
					
					current_1 = true;
				}
			}
			else if(index == 2)
			{
				if(current_2 == true)
				{
					$("#gallery_content_2_1").html(data);
					$("#gallery_content_2_2").fadeOut(function() {
						$("#gallery_content_2_1").fadeIn();
					});
					
					current_2 = false;
				}
				else
				{
					$("#gallery_content_2_2").html(data);
					$("#gallery_content_2_1").fadeOut(function() {
						$("#gallery_content_2_2").fadeIn();
					});
					
					current_2 = true;
				}
			}
			else if(index == 3)
			{
				if(current_3 == true)
				{
					$("#gallery_content_3_1").html(data);
					$("#gallery_content_3_2").fadeOut(function() {
						$("#gallery_content_3_1").fadeIn();
					});
					
					current_3 = false;
				}
				else
				{
					$("#gallery_content_3_2").html(data);
					$("#gallery_content_3_1").fadeOut(function() {
						$("#gallery_content_3_2").fadeIn();
					});	
					
					current_3 = true;
				}
			}
		},
		complete: function(data) { },
        error: function(request, status,error) { }
	});
}


// Social Canvas
function ajax_retrieveFeedAdmin(url, parameters)
{
    $.ajax({
        type: "POST",
        url: url, 
        data: parameters,
		dataType: 'text',
        success: function(data) { 
			$("#socialmedia").html(data);
		},
		complete: function(data) { },
        error: function(request, status,error) { }
	});
}

function ajax_acceptFeed(url, parameters)
{
    $.ajax({
        type: "POST",
        url: url, 
        data: parameters,
		dataType: 'text',
        success: function(data) { 
			ajax_retrieveFeedAdmin("function.do", "formType=ajaxRetrieveFeedAdmin&venueID=1");
		},
		complete: function(data) { },
        error: function(request, status,error) { }
	});
}

function ajax_ignoreFeed(url, parameters)
{
    $.ajax({
        type: "POST",
        url: url, 
        data: parameters,
		dataType: 'text',
        success: function(data) { 
			ajax_retrieveFeedAdmin("function.do", "formType=ajaxRetrieveFeedAdmin&venueID=1");
		},
		complete: function(data) { },
        error: function(request, status,error) { }
	});
}

function ajax_loadFeeds(url, parameters, idOfPage, loadedIDs, instagramHeader, maxFeeds)
{
	$.ajax({
        type: "POST",
        url: url, 
        data: parameters,
		dataType: "html",
        success: function(data)
		{
			// Append data to list
			$(data).prependTo("#" + idOfPage).hide().slideDown();
			
			// Remove excess
			var listItems = $("#" + idOfPage + " li");
			if(listItems.length > maxFeeds)
			{
				listItems.each(function(idx, li)
				{
					if(idx >= maxFeeds)
					{
						$(li).remove();
					}
				});
			}
			
			// Add IDs to hidden input
			tmpData = $("#" + loadedIDs).val();
			dataList = data.split("id='");
			
			for(i = 0; i < dataList.length; i++)
			{
				if(dataList[i].indexOf("'") != -1)
				{
					tmpData +=  "," + dataList[i].substring(0, dataList[i].indexOf("'"));
				}
			}
			
			if(tmpData.indexOf(",") == 0)
			{
				tmpData = tmpData.substring(1, tmpData.length);
			}
			
			$("#" + loadedIDs).val(tmpData);
        },
		complete: function(data) { },
        error: function(request, status,error) { }
	});
}


// Flash
function ajax_initArduino(url, parameters)
{
    $.ajax({
        type: "POST",
        url: url, 
        data: parameters,
		dataType: 'text',
        success: function(data) { },
		complete: function(data) { },
        error: function(request, status,error) { }
	});
}

function ajax_flash(url, parameters)
{
    $.ajax({
        type: "POST",
        url: url, 
        data: parameters,
		dataType: 'text',
        success: function(data) { },
		complete: function(data) { },
        error: function(request, status,error) { }
	});
}


// Read Playlist
function ajax_readPlaylist(url, parameters)
{
	$.ajax({
        type: "POST",
        url: url, 
        data: parameters,
		dataType: 'text',
        success: function(data) { 
			videoURLList = [];
			libURLList = [];
			applicationURLList = [];
			
			var list = data.split("@");
			
			var content;
			for(i = 0; i < list.length; i++)
			{
				content = list[i].split(",");
				
				videoURLList.push(content[0]);
				libURLList.push(content[1]);
				applicationURLList.push(content[2]);
			}
		},
		complete: function(data) { },
        error: function(request, status,error) { }
	});
}


// EGreeting
function ajax_submitForPrintEGreeting(url, parameters)
{
    $.ajax({
        type: "POST",
        url: url, 
        data: parameters,
		dataType: 'text',
        success: function(data) { 
			$("#eGreetingID").val(data);
		},
		complete: function(data) { },
        error: function(request, status,error) { }
	});
}

function ajax_checkValidPrintCode(url, parameters)
{
	$.ajax({
        type: "POST",
        url: url, 
        data: parameters,
		dataType: 'text',
        success: function(data) { 
			if(data == "true")
			{
				$("#code_page").fadeOut(function() {
					$("#camera_page").fadeIn();
				});
			}
			else if(data == "false")
			{
				$("#code_wrong").html("* Please enter a valid code.");
				$("#code_wrong").fadeIn();
			}
			else if(data == "used")
			{
				$("#code_wrong").html("* Entered code has already been used.");
				$("#code_wrong").fadeIn();
			}
		},
		complete: function(data) { },
        error: function(request, status,error) { }
	});
}


// EProduction
function ajax_digitalAlert(url, parameters)
{
    $.ajax({
        type: "POST",
        url: url, 
        data: parameters,
		dataType: 'text',
        success: function(data) { },
		complete: function(data) { },
        error: function(request, status,error) { }
	});
}

function checkImage(src, index)
{
	console.log("new");
	var img = new Image();
	img.onload = function() {
		$("#bread_img_" + index).attr("src", src);
	};
	img.src = src;
}

function ajax_checkEProductionTopSeven(url, parameters)
{
	$.ajax({
        type: "POST",
        url: url, 
        data: parameters,
		dataType: 'text',
        success: function(data) { 
			if(data == "")
			{
				for(i = 1; i < 8; i++)
				{
					$("#bread_" + i).hide();
					$("#bread_img_" + i).attr("src", "");
					$("#bread_name_" + i).html("");
					$("#bread_time_" + i).html("");
				}
			}
			else
			{
				console.log(data);
				
				var list = data.split("@");
				var emptySize = 7 - list.length;
				
				var counter = 1;
				var innerList;
				for(i = 0; i < list.length; i++)
				{
					innerList = list[i].split("#");
					
					$("#bread_" + (i + 1)).show();
					$("#bread_img_" + (i + 1)).attr("src", innerList[0]);
					$("#bread_name_" + (i + 1)).html(innerList[1]);
					$("#bread_time_" + (i + 1)).html(innerList[2]);
					
					counter++;
				}
				
				for(i = counter; i < 8; i++)
				{
					$("#bread_" + i).hide();
					$("#bread_img_" + i).attr("src", "");
					$("#bread_name_" + i).html("");
					$("#bread_time_" + i).html("");
				}
			}
		},
		complete: function(data) { },
        error: function(request, status,error) { }
	});
}

function ajax_checkEProductionTicker(url, parameters)
{
	$.ajax({
        type: "POST",
        url: url, 
        data: parameters,
		dataType: 'text',
        success: function(data) { 
			console.log("ticker: " + data);
			if(data == "")
			{
				$("#ticker").html("");
				$("#footer").fadeOut();
			}
			else
			{
				console.log(data);
				
				var list = data.split("@");
				
				var innerList;
				var result = "<span style='height:80; color:#FF972A'>Time out from kitchen:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
							
				for(i = 0; i < list.length; i++)
				{
					innerList = list[i].split("#");
					result += "<span style='height:80; color:#FFFFFF;'>" + innerList[0] + " <b>(" + innerList[1] + ")</b></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
				}
				console.log("result" + result);
				$("#ticker").html(result);
				
				var d = new Date();
				if(d.getHours() < 20)
				{
					$("#footer").fadeIn();
				}
				else
				{
					$("#footer").fadeOut();
				}
			}
		},
		complete: function(data) { },
        error: function(request, status,error) { }
	});
}

function ajax_checkEProductionInterruptCountdown(url, parameters)
{
	$.ajax({
        type: "POST",
        url: url, 
        data: parameters,
		dataType: 'text',
        success: function(data) { 
			console.log("data: " + data);
			
			if(data != "")
			{
				var list = data.split("!@!");
					
				if($("#itemName").val() == list[0] && $("#countdownDueTime").val() == list[2])
				{
					// Same latest record. Do not need to update
				}
				else
				{
					// Clear running timeout
					if(startCountdown)
					{
						startCountdown = false;
					}
					
					$("#itemName").val(list[0]);
					$("#countdownTime").val(list[1]);
					$("#countdownDueTime").val(list[2]);
					
					// Show Countdown Tab
					$("#interrupt_timestamp").html("");
					countdown_tab(list[0]);
					
					setTimeout(function() {
						var getDate = new Date();
						var hr = getDate.getHours();
						var min = getDate.getMinutes();
						
						if(hr < 10)
						{
						    hr = "0" + hr;
						}
						
						if(min < 10)
						{
						    min = "0" + min;
						}
						
						if(hr < 12)
						{
							$("#interrupt_timestamp").html(hr + ":" + min + " AM");
						}
						else
						{
							$("#interrupt_timestamp").html(hr + ":" + min + "PM");
						}
					}, 45000);
					
					/*
					countdownTime = 20;
					var min = parseInt(countdownTime / 60);
					var sec = countdownTime % 60;
					
					if(min < 10)
					{
						$("#min_time").html("0" + min);
					}
					else
					{
						$("#min_time").html("" + min);
					}
					
					if(sec < 10)
					{
						$("#sec_time").html("0" + sec);
					}
					else
					{
						$("#sec_time").html("" + sec);
					}
					
					// Show Countdown Tab
					countdown_tab($("#itemName").val());
					
					// Start Countdown Timer
					startCountdown = true;
					console.log("startCountdown: " + startCountdown);
					countdown_timer = setInterval(function() {
						if(countdownTime == 0)
						{
							$("#min_time").html("00");
							$("#sec_time").html("00");
							
							clearTimeout(countdown_timer);
							startCountdown = false;
							close_countdown_tab();
						}
						else
						{
							console.log("countdownTime: " + countdownTime);
							
							var min = parseInt(countdownTime / 60);
							var sec = countdownTime % 60;
							
							if(min < 10)
							{
								$("#min_time").html("0" + min);
							}
							else
							{
								$("#min_time").html("" + min);
							}
							
							if(sec < 10)
							{
								$("#sec_time").html("0" + sec);
							}
							else
							{
								$("#sec_time").html("" + sec);
							}
							
							if(sec == 10)
							{
								var getDate = new Date();
								var hr = getDate.getHours();
								var min = getDate.getMinutes();
								
								if(hr < 10)
								{
								    hr = "0" + hr;
								}
								
								if(min < 10)
								{
								    min = "0" + min;
								}
								
								$("#interrupt_timestamp").html(" at " + hr + ":" + min);
							}
							
							countdownTime--;
						}
					}, 1000);
					*/
				}
			}
			
			
			/*
			console.log("data: " + data);
			
			if(data != "")
			{
				if(startCountdown == false)
				{
					var list = data.split("!@!");
					
					if($("#itemName").val() == list[0] && $("#countdownDueTime").val() == list[2])
					{
						// Same latest record. Do not need to update
					}
					else
					{
						$("#itemName").val(list[0]);
						$("#countdownTime").val(list[1]);
						$("#countdownDueTime").val(list[2]);
						$("#countdown_tab").animate({"top": "0px"}, 500);
						
						// Set Timer
						countdownTime = parseInt(list[1]);
						var min = parseInt(countdownTime / 60);
						var sec = countdownTime % 60;
						
						if(min < 10)
						{
							$("#min_time").html("0" + min);
						}
						else
						{
							$("#min_time").html("" + min);
						}
						
						if(sec < 10)
						{
							$("#sec_time").html("0" + sec);
						}
						else
						{
							$("#sec_time").html("" + sec);
						}
						
						// Start Countdown Timer
						startCountdown = true;
						console.log("startCountdown: " + startCountdown);
						countdown_timer = setInterval(function() {
							if(countdownTime == 0)
							{
								$("#min_time").html("00");
								$("#sec_time").html("00");
								
								// Blink Timing
								if(blink_countdown == false)
								{
									blink_countdown = true;
									
									blink_countdown_timer = setInterval(function() {
										console.log($("#min_time").css("color"));
										if($("#min_time").css("color") == "rgb(255, 255, 255)")
										{
											$("#min_time").css("color", "#BA3D09");
											$("#sec_time").css("color", "#BA3D09");
										}
										else
										{
											$("#min_time").css("color", "#FFFFFF");
											$("#sec_time").css("color", "#FFFFFF");
										}
									}, 100);
								}
								
								setTimeout(function() {
									clearTimeout(blink_countdown_timer);
									clearTimeout(countdown_timer);
									$("#countdown_tab").animate({"top": "-206px"}, 500);
									$("#min_time").css("color", "#BA3D09");
									$("#sec_time").css("color", "#BA3D09");
									blink_countdown = false;
									startCountdown = false;
								}, 10000);
							}
							else
							{
								console.log("countdownTime: " + countdownTime);
								
								var min = parseInt(countdownTime / 60);
								var sec = countdownTime % 60;
								
								if(min < 10)
								{
									$("#min_time").html("0" + min);
								}
								else
								{
									$("#min_time").html("" + min);
								}
								
								if(sec < 10)
								{
									$("#sec_time").html("0" + sec);
								}
								else
								{
									$("#sec_time").html("" + sec);
								}
								
								countdownTime--;
							}
						}, 1000);
					}
				}
			}
			*/
		},
		complete: function(data) { },
        error: function(request, status,error) { }
	});
}