use Rack::Static,
	:urls => ["/images", "/javascript", "/css", "/audio"],
	:root => "public"

Rack::Mime::MIME_TYPES.merge!({
  ".ogg"     => "application/ogg",
  ".ogx"     => "application/ogg",
  ".ogv"     => "video/ogg",
  ".oga"     => "audio/ogg",
  ".mp4"     => "video/mp4",
  ".m4v"     => "video/mp4",
  ".mp3"     => "audio/mpeg",
  ".m4a"     => "audio/mpeg",
  ".htc"     => "text/x-component"
})

run lambda { |env|
	[
		200,
		{
			'Content-Type' 	=> 'text/html',
			'Cache-Control'	=> 'public, max=86400'
		},
		File.open('public/index.html', File::RDONLY)
	]
}