document
    .getElementById('tab-1')
    .addEventListener('click', function() {
        document
            .getElementById('tab-1')
            .classList.add('toggled')
        document
            .getElementById('tab-2')
            .classList.remove('toggled')
        document
            .getElementById('tab-3')
            .classList.remove('toggled')
        document
            .getElementById('tab-4')
            .classList.remove('toggled')
        document
            .getElementById('normals')
            .classList.add('visible')
        document
            .getElementById('aerials')
            .classList.remove('visible')
        document
            .getElementById('specials')
            .classList.remove('visible')
        document
            .getElementById('misc')
            .classList.remove('visible')
    })

document
    .getElementById('tab-2')
    .addEventListener('click', function() {
        document
            .getElementById('tab-2')
            .classList.add('toggled')
        document
            .getElementById('tab-1')
            .classList.remove('toggled')
        document
            .getElementById('tab-3')
            .classList.remove('toggled')
        document
            .getElementById('tab-4')
            .classList.remove('toggled')
        document
            .getElementById('aerials')
            .classList.add('visible')
        document
            .getElementById('normals')
            .classList.remove('visible')
        document
            .getElementById('specials')
            .classList.remove('visible')
        document
            .getElementById('misc')
            .classList.remove('visible')
    })

document
    .getElementById('tab-3')
    .addEventListener('click', function() {
        document
            .getElementById('tab-3')
            .classList.add('toggled')
        document
            .getElementById('tab-2')
            .classList.remove('toggled')
        document
            .getElementById('tab-1')
            .classList.remove('toggled')
        document
            .getElementById('tab-4')
            .classList.remove('toggled')
        document
            .getElementById('specials')
            .classList.add('visible')
        document
            .getElementById('aerials')
            .classList.remove('visible')
        document
            .getElementById('normals')
            .classList.remove('visible')
        document
            .getElementById('misc')
            .classList.remove('visible')
    })

document
    .getElementById('tab-4')
    .addEventListener('click', function() {
        document
            .getElementById('tab-4')
            .classList.add('toggled')
        document
            .getElementById('tab-2')
            .classList.remove('toggled')
        document
            .getElementById('tab-3')
            .classList.remove('toggled')
        document
            .getElementById('tab-1')
            .classList.remove('toggled')
            document
            .getElementById('misc')
            .classList.add('visible')
        document
            .getElementById('aerials')
            .classList.remove('visible')
        document
            .getElementById('specials')
            .classList.remove('visible')
        document
            .getElementById('normals')
            .classList.remove('visible')
    })