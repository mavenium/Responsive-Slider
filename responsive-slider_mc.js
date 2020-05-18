	(function(){
		tinymce.PluginManager.requireLangPack('blist');
		tinymce.create('tinymce.plugins.blist', {
			init : function(ed, url){
				ed.addCommand('responsive_slider', function(){
					ilc_sel_content = tinyMCE.activeEditor.selection.getContent();
					tinyMCE.activeEditor.selection.setContent('[responsive_slider]' + ilc_sel_content);
				});
				ed.addButton('rs_code', {
					title: 'اسلایدر واکنشگرا - کدکوتاه',
					cmd: 'responsive_slider',
					icon: 'image'
				});
			},
			createControl : function(n, cm){
				return null;
			},
		});
		tinymce.PluginManager.add('blist', tinymce.plugins.blist);
	})();
