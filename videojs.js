const player = new Plyr('#player', {
    invertTime: false,
});
player.source = {
    type: 'video',
    poster: 'img/vdnw.png', // ���� � ������� �� ���������
    sources: [
        {
            src: 'img/vdnw.mp4', // ���� � ������� �� ���������
            type: 'video/mp4',
            size: 480
        }
    ]
};
$(function () {
    // ��������� ����� �� �����
    $('.change-video').click(function () {
        $('.change-video').removeClass('active');
        $(this).addClass('active');
        let videourl = $(this).attr('data-video');
        let videoposter = $(this).attr('data-poster');
        player.source = {
            type: 'video',
            poster: videoposter,
            sources: [
                {
                    src: videourl,
                    type: 'video/mp4',
                    size: 480
                }
            ]
        };
        //    player.play(); // ���� ����� ��������� ����� ����� �� �����, ���������������� ��� �������
    });
    // ������������ ����� �� ��������� �� ���������    
    player.on('ended', event => {
        let nextvideo = $('.change-video.active').next(".change-video");
        let urlnextvideo = nextvideo.attr('data-video');
        let urlnextposter = nextvideo.attr('data-poster');
        if (!urlnextvideo) {
            player.stop();
        } else {
            $('.change-video').removeClass('active');
            nextvideo.addClass('active');
            player.source = {
                type: 'video',
                poster: urlnextposter,
                sources: [
                    {
                        src: urlnextvideo,
                        type: 'video/mp4',
                        size: 480
                    }
                ]
            };
            //    player.play(); // ���� ����� ����� ��������� ��������� �����, ���������������� ��� ������� 
        }
    });
});