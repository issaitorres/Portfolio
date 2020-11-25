
import re
import os

from django.shortcuts import render
from googleapiclient.discovery import build
from datetime import timedelta


#ENTER YOUR API KEY HERE
api_key = os.environ.get('API_KEY')


def index(request):
    return render(request, 'web_app/index.html')

def tutorial(request):
    return render(request, 'web_app/tutorial.html')

def search(request):
    if request.method == "GET":
        string_form = str(request)
        string_form = string_form.split('=')
        playlistId = string_form[-1][:len(string_form[-1])-2]

        def all_info(playlistId):

            def view_abbreviator(views):
                if views < 1000:
                    return str(views)
                elif views <= 9_999:
                    return ".".join(str(views)[0:2]) + "K"
                elif views <= 99_999:
                    return str(views)[0:2] + "K"
                elif views <= 999_999:
                    return str(views)[0:3] + "K"
                elif views <= 9_999_999:
                    return ".".join(str(views)[0:2]) + "M"
                elif views <= 99_999_999:
                    return str(views)[0:2] + "M"
                elif views <= 999_999_999:
                    return str(views)[0:3] + "M"
                elif views <= 9_999_999_999:
                    return ".".join(str(views)[0:2]) + "B"
                elif views <= 99_999_999_999:
                    return str(views)[0:2] + "B"
                elif views <= 999_999_999_999:
                    return str(views)[0:3] + "B"

            def sort_playlist_views_likes_dislikes_comments(playlistId):
                youtube = build('youtube', 'v3', developerKey=api_key)
                playlist_id = playlistId
                videos = []

                pl_request2 = youtube.playlists().list(
                    part='snippet',
                    id=playlist_id,
                )
                pl_response2 = pl_request2.execute()

                global title
                try:
                    title = pl_response2['items'][0]['snippet']['title']
                except:
                    return -1

                nextPageToken = None
                while True:
                    pl_request = youtube.playlistItems().list(
                        part='contentDetails, snippet',
                        playlistId=playlist_id,
                        maxResults=50,
                        pageToken=nextPageToken,
                    )
                    pl_response = pl_request.execute()

                    vid_ids = []
                    vid_titles = []
                    for item in pl_response['items']:
                        vid_title = item['snippet']['title']
                        vid_id = item['contentDetails']['videoId']
                        vid_ids.append(vid_id)
                        vid_titles.append(vid_title)

                    vid_request = youtube.videos().list(
                        part='statistics',
                        id=",".join(vid_ids)
                    )

                    vid_response = vid_request.execute()

                    x = 0
                    for item in vid_response['items']:
                        if "viewCount" in item['statistics']:
                            vid_views = item['statistics']["viewCount"]
                        else:
                            vid_views = 0
                        if "likeCount" in item['statistics']:
                            vid_likes = item['statistics']["likeCount"]
                        else:
                            vid_likes = 0
                        if "dislikeCount" in item['statistics']:
                            vid_dislikes = item['statistics']["dislikeCount"]
                        else:
                            vid_dislikes = 0
                        if "commentCount" in item['statistics']:
                            vid_comments = item['statistics']["commentCount"]
                        else:
                            vid_comments = 0

                        vid_id = item['id']
                        yt_link = f'https://youtu.be/{vid_id}'
                        videos.append(
                            {
                                'views': int(vid_views),
                                'likes': int(vid_likes),
                                'dislikes': int(vid_dislikes),
                                'comments': int(vid_comments),
                                'url': yt_link,
                                'title': vid_titles[x]
                            }
                        )
                        x += 1

                    nextPageToken = pl_response.get('nextPageToken')
                    if not nextPageToken:
                        break

                output = []
                res = []

                for item in ['views', 'likes', 'dislikes', 'comments']:
                    videos.sort(key=lambda x: x[item], reverse=True)
                    add_embded_link = True
                    for video in videos:

                        if add_embded_link:
                            ends = video['url']
                            ends = ends.split("/")
                            embded_link = "https://www.youtube.com/embed/" + ends[-1]
                            res.append((video['url'], view_abbreviator(video[item]), video['title'], embded_link))
                            add_embded_link = False
                        else:
                            res.append((video['url'], view_abbreviator(video[item]), video['title']))

                    output.append(res)
                    res = []

                return output

            def get_duration_of_playlist(playlistId):
                youtube = build('youtube', 'v3', developerKey=api_key)
                hours_pattern = re.compile(r'(\d+)H')
                minutes_pattern = re.compile(r'(\d+)M')
                seconds_pattern = re.compile(r'(\d+)S')
                total_seconds = 0
                nextPageToken = None

                while True:
                    pl_request = youtube.playlistItems().list(
                        part='contentDetails',
                        playlistId=playlistId,
                        maxResults=50,
                        pageToken=nextPageToken
                    )

                    pl_response = pl_request.execute()
                    vid_ids = []
                    for item in pl_response['items']:
                        vid_id = item['contentDetails']['videoId']
                        vid_ids.append(vid_id)

                    vid_request = youtube.videos().list(
                        part='contentDetails',
                        id=",".join(vid_ids)
                    )

                    vid_response = vid_request.execute()
                    for item in vid_response['items']:
                        duration = item['contentDetails']['duration']
                        hours = hours_pattern.search(duration)
                        minutes = minutes_pattern.search(duration)
                        seconds = seconds_pattern.search(duration)
                        hours = int(hours.group(1)) if hours else 0
                        minutes = int(minutes.group(1)) if minutes else 0
                        seconds = int(seconds.group(1)) if seconds else 0
                        video_seconds = timedelta(
                            hours=hours,
                            minutes=minutes,
                            seconds=seconds
                        ).total_seconds()

                        total_seconds += video_seconds

                    nextPageToken = pl_response.get('nextPageToken')
                    if not nextPageToken:
                        break

                total_seconds = int(total_seconds)
                minutes, seconds = divmod(total_seconds, 60)
                hours, minutes = divmod(minutes, 60)

                return (hours, minutes)

            def fun_fact(hours, minutes):
                if hours >= 744:
                    return "This playlist is longer than William Henry Harrison's presidency! Wow!"
                elif hours >= 44:
                    return "This playlist is longer than the amount of time needed to fly once around the world! Wow!"
                elif hours >= 26 and minutes >= 44:
                    return "This playlist is longer than the amount of time needed to watch all 11 Star Wars movies!"
                elif hours >= 19 and minutes >= 40:
                    return "This playlist is longer than the amount of time needed to watch all 8 Harry Potter movies!"
                elif hours >= 11:
                    return "This playlist is longer than the amount of time needed to watch all 3 Lord of the Rings" \
                           " movies!"
                elif hours >= 8:
                    return "This playlist is longer than the amount of time needed to watch all 4 Indiana Jones movies!"
                elif hours >= 5 and minutes >= 30:
                    return "This playlist is longer than the amount of time needed for sunlight to reach Pluto!"
                elif hours >= 3 and minutes >= 12:
                    return "This playlist is longer than the average American Football game!"
                elif hours >= 3:
                    return "This playlist is longer than the amount of time needed to take the SAT!"
                elif hours >= 2 and minutes >= 30:
                    return "This playlist is longer than the average Basketball game!"
                elif hours >= 1 and minutes >= 35:
                    return "This playlist is longer than the average Soccer game!"
                elif (hours >= 0 and minutes >= 38):
                    return "This playlist is longer than the Anglo-Zanzibar War of 1896!"
                elif (hours >= 0 and minutes >= 27):
                    return "This playlist is longer than the average American Commute!"
                elif (hours >= 0 and minutes >= 10) or hours != 0:
                    return "This playlist is longer than the average time to run a mile!"
                else:
                    return "Try submitting a longer playlist for a cool fact!"

            duration = get_duration_of_playlist(playlistId)
            output = [sort_playlist_views_likes_dislikes_comments(playlistId),
                     [duration,playlistId,title,fun_fact(duration[0],duration[1])]]

            return output

        results = all_info(playlistId)
        context = {
            "results": results
        }

    return render(request, 'web_app/search.html',context)

def view_404(request, exception=None):
    return render(request, 'web_app/404.html')




