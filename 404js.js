window.onload = function () {
    let c = document.getElementById('canv')
    let $ = c.getContext('2d')
    let ms = false
    let w = 0, h = 0

    let img = new Image()
    //img.src==IMAGE OF ERROR
    // img.src = 'https://doofindermedia.s3.amazonaws.com/blog/2019/08/29/110655-404-not-found-Doofinder.jpg'
    // img.src = 'https://images.unsplash.com/photo-1562293661-7d82778e0a74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80'
    img.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/131045/404.png'

    let set = function () {
        var run, _h, _w, dx, a
        w = img.width
        h = img.height
        c.width = w + 5
        c.height = h
        $.translate(5, 0)
        // a==DISTORSION LEVEL
        a = 25
        dx = 0
        _w = w + 50
        _h = h + 50
        return (run = function () {
            var inc, i, j
            $.clearRect(-a, -a, _w, _h)
            inc = ms === true ? 0.5 : 0.18
            for (j = 0; j <= h; i = 0 <= h ? ++j : --j) {
                dx = ~~(inc * (Math.random() - 0.5) * a)
                $.drawImage(img, 0, i, w, 1, dx, i, w, 1)
            }
            window.requestAnimationFrame(run);
        })()
    };
    img.onload = function () {
        return set()
    };
    c.addEventListener('mouseover', function () {
        return ms = true
    }, false)
    c.addEventListener('touchmove', function (e) {
        e.preventDefault()
        return ms = true
    }, false)
    c.addEventListener('mouseout', function () {
        return ms = false
    }, false)
    c.addEventListener('touchend', function () {
        return ms = false
    }, false)
}()
