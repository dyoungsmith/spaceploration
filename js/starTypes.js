//var brownDwarf = 30;
//var low_mass = 100;
//var intermed_mass = 200;
//var high_mass = 350;
//var v_high_mass = 600;

var starTypes = {
	brownDwarf: {
		name: "Brown Dwarf",
		bio: "Congratulations! You made a brown dwarf. You didn't accumulate enough mass to create a star, so instead your brown dwarf will cool and fade over time. It weighs between about 7 and 8% of the Sun's mass. Gliese 229b was one of the first brown dwarfs ever discovered!"

	},

	lowMassStar: {
		name: "Low Mass Star",
		bio: "You made a low mass star! It weighs between 8 and 80% of the Sun's mass and will live for about a trillion years. Towards the end of its life, it will fizzle into a White Dwarf. White dwarfs are dense stellar embers that cool over billions of years. One example of a low mass star is Barnard's Star!"
	},

	iMMassStar: {
		name: "Intermediate Mass Star",
		bio: "You've created a Sun-like star! These stars have masses ranging from 0.8-8 times that of the Sun and have a lifetime of about 10 billion years. At the end of their lifetime, these stars have used up their primary fuel source and expand, becoming Red Giants (large low-temperature stars) which explode and cool further to become stellar remnants called White Dwarfs."
	},

	highMassStar: {
		name: "High Mass Star",
		bio: "Woah! That's a big star! I'd say it'll live for 10 million years. It is 8 to 20 times the mass of the Sun, and you know that the more massive a star, the shorter its lifespan will be. It's so big that once it has used up its primary energy source, it will expand into a Super Giant. The Super Giant will likely then explode in a Supernova and collapse into a Neutron star. Neutron stars are very small (not much bigger than Chicago!) and extremely dense. Cassiopeia A is one example of a high mass star."
	},

	vHighMassStar: {
		name: "Very High Mass Star",
		bio: "You made a big one--maybe even as big as Cygnus X-1! The highest-mass stars range from 20-100 times the mass of our Sun, and when they have used up their primary fuel source, they expand and become supergiant stars, which are larger than any other star and vary widely in temperature. These supergiants explode in a supernova and can either become a new star (play again!) or a black hole (light can't even escape this supermassive point!)."
	}

};

function checkStarType(diameter) {
	if (diameter <= 30) {
    $(".name").html(starTypes.brownDwarf.name);
		$(".description").html(starTypes.brownDwarf.bio);
		$( ".star" ).addClass( "brownDwarf" );
	} else if (diameter > 30 && diameter <=100) {
		$(".name").html(starTypes.lowMassStar.name);
		$(".description").html(starTypes.lowMassStar.bio);
		$( ".star" ).addClass( "lowMassStar" ).removeClass( "brownDwarf" );
	} else if (diameter > 100 && diameter <=200) {
		$(".name").html(starTypes.iMMassStar.name);
		$(".description").html(starTypes.iMMassStar.bio);
		$( ".star" ).addClass( "iMMassStar" ).removeClass( "lowMassStar" );
	} else if (diameter > 200 && diameter <=350) {
		$(".name").html(starTypes.highMassStar.name);
		$(".description").html(starTypes.highMassStar.bio);
		$( ".star" ).addClass( "highMassStar" ).removeClass( "iMMassStar" );
	} else {
		$(".name").html(starTypes.vHighMassStar.name);
		$(".description").html(starTypes.vHighMassStar.bio);
		$( ".star" ).addClass( "vHighMassStar" ).removeClass( "highMassStar" );
	}
}