function createtoc () {
	// creates a TOC and puts it in a div with id="toc"
	
	var h2s = document.getElementsByTagName('H2');
	var toc = document.getElementById('toclocation');
	
	toplevel = toc.appendChild(document.createElement('ol'));
	for (var i=0; i<h2s.length; i++) {
		if (!h2s[i].firstChild.id.match(/internal-links/) && 
			h2s[i].firstChild.id != 'links') {
			var h2 = h2s[i].firstChild.innerHTML;
			var h = document.createElement('li');
			a = document.createElement('a');
				a.href = '#'+h2s[i].firstChild.id;
				a.innerHTML = h2;
			h.appendChild(a);
			h.className = 'toc1';
		
			// check for h3s
			var h3s = h2s[i].parentNode.getElementsByTagName('H3');
			if (h3s.length > 0) { secondlevel = h.appendChild(document.createElement('ol')); }
			for (var k=0; k<h3s.length; k++) {
				if (!h3s[k].className.match(/notoc/)) {
					var h3 = h3s[k].firstChild.innerHTML;
					var hh = document.createElement('li');
					aa = document.createElement('a');
						aa.href = '#'+h3s[k].firstChild.id;
						aa.innerHTML = h3;
					hh.appendChild(aa);
					hh.className = 'toc2';
					}
				secondlevel.appendChild(hh);
				}
			toplevel.appendChild(h);
			}
		}
	}