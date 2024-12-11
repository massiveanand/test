// var siteUrl="https://giftscanvas.com/";
// var baseUrl='https://giftscanvas.com/';
var siteUrl="http://127.0.0.1/giftcanvas/index.php/";
var baseUrl='http://127.0.0.1/giftcanvas/';
$(function(){
	$('#contactform').submit(function(){
		$.ajax({
			type: "POST",url: siteUrl+"contact/add",data: $("#contactform").serialize(),
			beforeSend: function(){$('#result').html('<p>Please Wait...</p>');},success: function(data){
				$('#result').empty();
				if(data=='1'){
					html="<div  class='alert alert-success'>Success ! Thanks For Contacting Us.<br><small>We will get back to you soon.</small></div>";
					$('#contactform').trigger('reset');
				}else html=data;
				$('#result').html(html);
			}
		});
	});
	/*$('#subutton').click(function(){
		$.ajax({
			type: "POST",url: siteUrl+"login/register",data: $("#signupform").serialize(),
			beforeSend: function(){$('#suresult').html('<p>Please Wait...</p>');},success: function(data){
				$('#suresult').empty();
				if(data=='1'){
					html="<div  class='alert alert-success'>Success ! Thanks For registering with us</div>";
					$('#signupform').trigger('reset');
				}else html=data;
				$('#suresult').html(html);
			}
		});
	});
	$('#sibutton').click(function(){
		$.ajax({
			type: "POST",url: siteUrl+"login/check",data: $("#signinform").serialize(),
			beforeSend: function(){$('#siresult').html('<p>Please Wait...</p>');},success: function(data){
				$('#siresult').empty();
				if(data=='1'){
					html="<div class='alert alert-success'>Successfully validated.</div>";
					$('#signinform').trigger('reset');
					window.location.reload();
				}else html=data;
				$('#siresult').html(html);
			}
		});
	});
	
	$('#restbtn').click(function(){
		$.ajax({
			type: "POST",url: siteUrl+"login/check_password",data: $("#resetForm").serialize(),
			beforeSend: function(){$('#resultreset').html('<p>Please Wait...</p>');},success: function(data){
				$('#resultreset').empty();
				console.log(data);
				if(data=='1'){
					html="<div class='alert alert-success'>Successfully Changed.</div>";
					$('#resetForm').trigger('reset');
					window.location.assign(siteUrl+"/home");
				}else html=data;
				$('#resultreset').html(html);
			}
		});
	});
	*/
	$('#btn-subscribe').click(function(){
		$.ajax({
			type: "POST",url: siteUrl+"newsletters/insert",data: $("#newsletter_form").serialize(),
			beforeSend: function(){$('#subresult').html('<p>Please Wait...</p>');},success: function(data){
				$('#subresult').html(data);
			}
		});
	});
});
function cartCheckout(){
	$.get(siteUrl+"cart/checkoutProcess?pnote="+$("#pnote").val(),function(data){
		window.location.assign(siteUrl+'cart/checkout');
	})
}
function saveReviewi(){
	$('#reviewform').ajaxForm({
		type: "POST",
		url: siteUrl+"reviews/save",
		beforeSend: function()
		{
			$('#reviewBtnS').attr('disabled',true);
			$('#webprogressri').css('display','inline');
		},
		success: function(data){
			if(data=='1'){
				html="<div class='alert alert-success'>Review Posted Successfully.</div>";
				$('#myForm').trigger('reset');
				window.location.reload();
			}else html=data;
			$('#reviewRes').html(html);
			$('#webprogressri').css('display','none');
			$('#reviewBtnS').attr('disabled',false);
		}
	});
}
function saveCancel(){
	$.ajax({
		type: "POST",url: siteUrl+"order_cancel",data: $("#cancelForm").serialize(),
		beforeSend: function(){$('#btncancel').attr('disabled',true);
		$('#cancelRes').html('Please wait...');},success: function(data){
			if(data=='1'){
				html="<div class='alert alert-success'>Order Cancel Applied Successfully.</div>";
				$('#cancelRes').html(html);
				setTimeout(function(){ window.location.reload(); }, 1500);
			}else html=data;
			$('#cancelRes').html(html);
			$('#btncancel').attr('disabled',false);
		}
	});
}
function saveReturn(){
	$.ajax({
		type: "POST",url: siteUrl+"order_cancel/saveReturn",data: $("#returnForm").serialize(),
		beforeSend: function(){$('#btncancel').attr('disabled',true);
		$('#cancelRes').html('Please wait...');},success: function(data){
			if(data=='1'){
				html="<div class='alert alert-success'>Order Return Requested Successfully.</div>";
				$('#cancelRes').html(html);
				setTimeout(function(){ window.location.reload(); }, 1500);
			}else html=data;
			$('#cancelRes').html(html);
			$('#btncancel').attr('disabled',false);
		}
	});
}
function calcShipping(){
	var zone=$("#zone_idl").val();
	var pin=$("#pincodeL").val();
	$("#shippingLabel").html("Fetching...");
	$.get(siteUrl+"cart/view_shipping_cost/"+zone+"/"+pin,function(data){
		$("#shippingLabel").html(data);
	})
}
function returnOrder(oid,t=0){
	$("#returnModal").modal('show');
	$("#returnModalBody").html('<img src="'+baseUrl+'assets/images/progress/ajax-loader9.gif" alt="loader">');
	$.get(siteUrl+"users/returnForm/"+oid+'/'+t,function(data){
		$("#returnModalBody").html(data);
	})
}
function setCatImage(img='',name='',id='',cat=''){
	if(img){
		imhtml='<a class="d-block mb-2" href="#"><img src="'+baseUrl+'assets/uploads/category/'+img+'" alt="'+name+'"/></a><br><a class="btn btn-primary btn-shadow btn-sm" href="#">See more<i class="czi-arrow-right font-size-xs ml-1"></i></a>';
	}else imhtml='';
	$("#scimgarea"+cat).html(imhtml);
}
function addCart(id='',qty=1,note=''){
	$.get(siteUrl+"cart/add/"+id+"/"+qty+"/"+note,function(data){
		$("#cart-toast").toast('show');
		navCartRender();
	})
}
function buyNow(id='',qty=1,note=''){
	$.get(siteUrl+"cart/add/"+id+"/"+qty+"/"+note,function(data){
		$("#cart-toast").toast('show');
		window.location.assign(siteUrl+'cart/checkout');
	})
}
function addCartForm(id='',buy=false){
	var qty=$("#qty").val();
	var note=$("#pnote").val();
	if(buy=='buy'){
		buyNow(id,qty,note);
	}else{
		addCart(id,qty,note);
		return false;
	}
	
}
function addWishlist(id=''){
		$.get(siteUrl+"wishlist/add/"+id,function(data){
		if(data=='1'){
			$(".wishtoast-body").html("Item <b>added</b> to your <a href='"+siteUrl+"users/wishlist#wishlArea'>Wishlist</a>");
			$("#wish-toast").toast('show');
			setWishlist();
		}else if(data=='2'){
			$(".wsh"+id).removeClass('active');
			$(".wishtoast-body").html("Item <b>removed</b> from your <a href='"+siteUrl+"users/wishlist#wishlArea'>Wishlist</a>");
			$("#wish-toast").toast('show');
			setWishlist();
		}
		else{
			$("#error-toast-msg").html(data);
			$("#error-toast").toast('show');
		}
	})
}
function setWishlist(){
	$.get(siteUrl+"wishlist/view",function(data){
		$("#wish-counter1").html(data.length);
		$("#wish-counter2").html(data.length);
		$("#wish-counter3").html(data.length);
		$(data).each(function(k,v){
			$(".wsh"+v.i).addClass('active');
		});
	});
}
setWishlist();
//function countWishlist(){
//	$.get(siteUrl+"wishlist/count",function(data){
//		$("#wish-counter1").html(data);
//		$("#wish-counter2").html(data);
//		$("#wish-counter3").html(data);
//	});
//}
//countWishlist();
function editReview(pid,rid){
	$('#comment').focus();
	$.get(siteUrl+"reviews/view/"+pid+"/"+rid,function(data){
		$("#rating").val(data[0].rating);
		$("#comment").val(data[0].comment);
		$("#r_id").val(data[0].r_id);
		$("#old_image").val(data[0].image);
	});
	$.get(siteUrl+"reviews/view_img/"+rid,function(data){
		rimghtml="";
		if(data.length>0){
			$(data).each(function(k,v){
				rimghtml+="<div class='imgc' id='raimg"+v.id+"'><img src='"+baseUrl+"assets/uploads/reviews/thumb/"+v.img+"'><a onclick='delRevImg("+rid+","+v.id+")'>X</a></div>";
			})
			$("#rimage").html(rimghtml);
		}else $("#rimage").html(rimghtml);
	})
}
function delRevImg(rid,id){
	$("#raimg"+id).addClass('imgch');
	$.get(siteUrl+"reviews/delRevImg/"+rid+"/"+id,function(data){
		$("#raimg"+id).html('');
		$("#imgar"+id).html('');
	})
}
function openLoginModal(){
	$("#signin-modal").modal('show');
}
function navCartRender(){
	$.get(siteUrl+"cart/navCartRender",function(data){
		$("#navCartPop").html(data);
	})
	$.get(siteUrl+"cart/fetchJson",function(data){
		$("#navCartRow").html(data.rows);
		$("#navCartTotal").html(data.total);
		$(".cartTotal").html(data.total);
		
		$("#navCartRowf").html(data.rows);
		$("#navCartTotalf").html(data.total);
	})
}
navCartRender();
// function onshow() {
// 	$("#myOverlay").css("display", "block");
// 	var nv = document.querySelector("#drop_down_nav");
// 	setTimeout(function () {
// 		nv.classList.add("show");
// 	}, 500);
// }
// function offshow() {
// 	$("#myOverlay").css("display", "none");
// 	var nv = document.querySelector("#drop_down_nav");
// 	nv.classList.remove("show");
// }
function quickView(id,nm){
	$("#quick-view-electro").modal('show');
	$("#pNM").html(nm);
	$("#qpdata").html('<img src="'+baseUrl+'assets/images/progress/ajax-loader9.gif" alt="'+nm+'">');
	$("#qvlink"). attr("href", siteUrl+"item/view/"+id); 
	$.get(siteUrl+"item/single/"+id,function(data){
		$("#qpdata").html(data);
	})
}
function checkPromo(){
	var promo=$("#promoCode").val();
	$("#pres").html('');
	$.get(siteUrl+"cart/checkPromo?promoCode="+promo,function(data){
		if(data=='1')
			window.location.reload();
		else $("#pres").html(data);
	})
}



//google sign in
function renderButton() {
    gapi.signin2.render('g-signin2', {
        'scope': 'profile email',
        'width': 250,
        'height': 40,
        'longtitle': true,
        'theme': 'dark',
        'onsuccess': onSignIn,
        'onfailure': onFailure
    });
}
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    var googleTockenId = profile.getId();
    var name = profile.getName();
    var email = profile.getEmail();
    var profile = profile.getImageUrl();
    $('#siresult').html("<div class='alert alert-success'>Successfully validated. Please Wait..</div>");
    $.post(siteUrl+"login/authVerifyGoogle",{authProvider:"Google",googleTockenId:googleTockenId,name:name,email:email,profile:profile,id_token:googleUser.getAuthResponse().id_token},function (res) {
    	if(res=='1') window.location.reload();
    	else if(res!='2') $('#siresult').html("<div class='alert alert-danger'>"+res+"</div>");
//    	else console.log('Verified Login');
    });
}
// Sign-in failure callback
function onFailure(error) {
	console.log(error);
	$('#siresult').html("<div class='alert alert-danger'>"+error+"</div>");
}

$('#searchFrm .typeahead').typeahead({
    source:  function (query, process) {
    return $.get(siteUrl+"item/filter_search", { q: query }, function (data) {
            return process(data);
        });
    }
});
//product cz-zoom starts..
function screen_resize() {
    var h = parseInt(window.innerHeight);
    var w = parseInt(window.innerWidth);

    if(w <= 991) {
        
    }else {
    	for (var e = document.querySelectorAll(".cz-image-zoom"), t = 0; t < e.length; t++) new Drift(e[t], {
            paneContainer: e[t].parentElement.querySelector(".cz-image-zoom-pane")
        })
    }
}
$(window).resize(function(e) {
    screen_resize();
});
$(document).ready(function(e) {
    screen_resize();
});
//product cz-zoom ends...

function showTimeMessage(message, name) {
	if (!message || !name) {
		console.error('Message or name is missing');
		return;
	}
	var $element = $('#' + name);
	if (!$element.length) {
		console.error(`Element with ID "${name}" not found`);
		return;
	}
	$element
		.html(message)
		.fadeIn({
			duration: 'slow',
			easing: 'swing',
			complete: function () {
				setTimeout(function () {
					$element.fadeOut({
						duration: 'slow',
						easing: 'swing'
					});
				}, 2000);
			}
		});
}



//coupon code starts here 

function checkPromoCart() {
	var promo = $("#promoCode").val();
	$("#pres").html('');
	$.get(siteUrl + "promo_code/checkPromoCart?code=" + promo, function (data) {
		// console.log(data);
		// if (data == '1'){
		// window.location.reload();
		// }
		// else{$("#pres").html(data);}
		if (data.err == "1") {
			var msg = "<div class='alert alert-danger mt-2'>" + data.msg + "</div>"
			$("#pres").html(msg);
		} else {
			window.location.reload();
		}
	})
}

function c_apply() {
	$("#c_apply").modal({
		show: false,
	});

	$("#c_apply").on('shown.bs.modal', function () {
		$(this).addClass('custom-animation');
	});
	$('#Coupon_msg').html('');
	$('#CouponCode').val("");
	$("#c_apply_form").trigger('reset');
	$("#c_apply").modal('show');
}
function c_close_apply() {
	$("#c_apply").modal('hide');
}

function getInputValue() {
	var input_value = $('#CouponCode').val();
	$.get(siteUrl + "promo_code/checkPromoCart?code=" + input_value, function (data) {
		if (data.err == "1") {
			showCouponMessage('<div class="alert alert-danger mt-2">' + data.msg + '</div>');
		} else {
			showCouponMessage('<div class="alert alert-success mt-2">' + data.msg + '</div>');
			window.location.reload();
		}
		//		console.log(data);
	})
}
function showCouponMessage(message) {
	$('#Coupon_msg').html(message).fadeIn('slow');
	setTimeout(function () {
		$('#Coupon_msg').fadeOut('slow');
	}, 2000);
}

function coupon_applied(code) {
	$.get(siteUrl + "promo_code/checkPromoCart?code=" + code, function (data) {
		if (data.err == "1") {
			showCouponMessage('<div class="alert alert-danger mt-2">' + data.msg + '</div>');
		} else {
			showCouponMessage('<div class="alert alert-success mt-2">' + data.msg + '</div>');
			window.location.reload();
		}
		//		console.log(data);
	})
}
document.addEventListener("DOMContentLoaded", function() {
    var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));

    if ("IntersectionObserver" in window) {
        var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    var video = entry.target;
                    video.src = video.dataset.src;
                    video.classList.remove("lazy");
                    lazyVideoObserver.unobserve(video);
                }
            });
        });

        lazyVideos.forEach(function(video) {
            lazyVideoObserver.observe(video);
        });
    } else {
        // For browsers that don't support Intersection Observer
        // Load videos immediately
        lazyVideos.forEach(function(video) {
            video.src = video.dataset.src;
            video.classList.remove("lazy");
        });
    }
});

